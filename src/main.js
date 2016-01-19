var check = function () {
    "use strict";

    if (typeof Symbol == "undefined") return false;
    try {
        eval("class Foo {}");
        eval("var bar = (x) => x+1");
    } catch (e) {
        return false;
    }

    return true;
}();

require({
    baseUrl: check ? 'target/es6' : 'target/es5',
}, ['utils/es6Features'], function (cb) {

    cb(function run() {
        require(['App'], function (App) {
        })
    })


});