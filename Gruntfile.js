module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg:       grunt.file.readJSON('package.json'),
        clean:     ['target'],
        requirejs: {
            prod: {
                options: {
                    paths:          {
                        'babel/polyfill': '../node_modules/babel-polyfill/dist/polyfill'
                    },
                    baseUrl:        'src',
                    optimize:       'none',
                    removeCombined: true,
                    dir:            'target/es6',
                    modules:        [
                        {
                            name: 'App'

                        }, {
                            name: 'babel/polyfill'

                        }, {
                            name: 'main'
                        }
                    ]
                }
            }
        },
        babel:     {
            options: {
                sourceMap: true,
                presets:   ['es2015']
            },
            dist:    {
                files: {
                    'target/es5/App.js': 'target/es6/App.js'
                }
            }
        },
        concat:    {
            options: {
                separator: ';',
            },
            dist:    {
                src:  ['target/es5/App.js'],
                dest: 'target/es5/App.js'
            }
        },
        uglify:    {
            options:  {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build:    {
                src:  'target/es5/App.js',
                dest: 'target/es5/App.js'
            },
            polyfill: {src: ['target/es6/babel/polyfill.js'], dest: 'target/es6/babel/polyfill.js'},
            main:     {src: ['target/es6/main.js'], dest: 'target/es6/main.js'}

        },
        copy:      {
            main: {
                files: [
                    // includes files within path
                    {src: ['target/es6/main.js'], dest: 'target/main.js'},
                    {src: ['target/es6/babel/polyfill.js'], dest: 'target/babel/polyfill.js'}

                ]
            }
        },
        mocha_phantomjs: {
            dev: {
                options: {
                    urls: [
                        'http://localhost:8000/test/index.html'
                    ]
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '.'
                }
            }
        },

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-mocha-phantomjs');
    grunt.loadNpmTasks('grunt-contrib-connect');


    grunt.registerTask('test', ['default','connect', 'mocha_phantomjs']);
    // Default task(s).
    grunt.registerTask('default', ['clean', 'requirejs', 'babel', 'concat', 'uglify', 'copy']);


};