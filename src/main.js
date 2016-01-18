function check() {
    "use strict";

    if (typeof Symbol == "undefined") return false;
    try {
        eval("class Foo {}");
        eval("var bar = (x) => x+1");
    } catch (e) {
        return false;
    }

    return true;
}

var check = check();
require({
    baseUrl: check ? './target/es6' : 'target/es5',
}, ['es6Features'], function (cb) {

    cb(function run() {
        require(['App'], function (App) {
        })
    })


});