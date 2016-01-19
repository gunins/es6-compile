##ES6 Compiler

This is the skeleton for es6 to es5 babel and requirejs, with client side feature validation. There is AMD support only. 

The `src/main` script will check if arrow functions and es6 class is supported in browser, if supported, then use es6 files directly, if not, then fallback to es5.

Also will check if es6 methods like `Reflect, Map, Set` etc. are supported,  If not then load `babel-polifyll`.

###Instalation

First neeed to install `grunt-cli globally` ```npm install -g grunt```

Clone repository, and run ```npm install``` after run ```grunt```

All files are in `src` folder.

###Running Tests

There also tests is available, with Mocha and chai. You can run tests using command `npm test`.
Write tests in `test/prod` folder, then add path in to `test/index.html` file `AppTests` variable array.

For example:

        var AppTests = [
            'prod/AppTest',
            'prod/ViewTest'
        ];
       
Also you can add custom paths for dependencies, or combined requirejs files. 

For Example:

        var AppPaths = {
            View: 'App'
        };
        
        