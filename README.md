##ES6 Compiler

This is the skeleton for es6 to es5 babel and requirejs, with client side feature validation. There is AMD support only. 
The `src/main` script will check if arrow functions and es6 class is supported in browser, if supported, then use es6 files directly, if not fallback to es5.
Also will check if es6 methods like `Reflect,Map,Set` etc. If not supported then loading `babel-polifyll`.

###Instalation
Clone repository, and run ```npm install``` after run ```grunt```

All files are in `src` folder.