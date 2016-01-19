// PhantomJS doesn't support bind yet
if (Function.prototype.bind === undefined) {
    (function () {
        var Ap = Array.prototype;
        var slice = Ap.slice;
        var Fp = Function.prototype;

        if (!Fp.bind) {
            // PhantomJS doesn't support Function.prototype.bind natively, so
            // polyfill it whenever this module is required.
            Fp.bind = function (context) {
                var func = this;
                var args = slice.call(arguments, 1);

                function bound() {
                    var invokedAsConstructor = func.prototype && (this instanceof func);
                    return func.apply(
                        // Ignore the context parameter when invoking the bound function
                        // as a constructor. Note that this includes not only constructor
                        // invocations using the new keyword but also calls to base class
                        // constructors such as BaseClass.call(this, ...) or super(...).
                        !invokedAsConstructor && context || this,
                        args.concat(slice.call(arguments))
                    );
                }

                // The bound function must share the .prototype of the unbound
                // function so that any object created by one constructor will count
                // as an instance of both constructors.
                bound.prototype = func.prototype;

                return bound;
            };
        }
    })();
}
function merge_options(obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj1) {
        obj3[attrname] = obj1[attrname];
    }
    for (var attrname in obj2) {
        obj3[attrname] = obj2[attrname];
    }
    return obj3;
}

var check = function () {
    'use strict';

    if (typeof Symbol == 'undefined') return false;
    try {
        eval('class Foo {}');
        eval('var bar = (x) => x+1');
    } catch (e) {
        return false;
    }

    return true;
}();
var paths = {
    test:  '../../test/',
    chai:  '../../node_modules/chai/chai',
    utils: '../../src/utils',
    babel: '../babel'
};
var AppPaths = AppPaths || {};
require.config({
    baseUrl: check ? '../target/es6' : '../target/es5',
    paths:   merge_options(paths, AppPaths)
});

mocha.ui('bdd');
require(['utils/es6Features'], function (cb) {
    cb(function run() {
        require(AppTests.map(function (testItem) {
            return 'test/' + testItem;
        }), function () {

            if (window.mochaPhantomJS) {
                window.mochaPhantomJS.run();
            }
            else {
                mocha.run();
            }

        });
    })


});
