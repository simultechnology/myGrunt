module.exports = function (grunt) {
    "use strict";
    // config
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    compass: true,
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['*.scss'],
                    dest: 'public',
                    ext: '.css'
                }]
            }
        },

        csslint: {
            check: {
                //src: 'build/styles.css'
                src: 'public/*.css'
            }
        },

        cssmin: {
            minimize: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */'
                },
                files: {
                    'build/styles.min.css': 'public/*.css'
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            files: ['src/**/*.scss', '*.html'],
            tasks: ['sass', 'csslint', 'cssmin']
        },

        connect: {
            server: {
                options: {
                    port: 11111,
                    hostname: 'localhost'
                }
            }
        }
    });

    // plugin
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // tasks
    //grunt.registerTask('default', 'less');
    grunt.registerTask('default', ['sass', 'csslint', 'cssmin', 'connect', 'watch']);
    grunt.registerTask('task1', 'less:build1');
    grunt.registerTask('task2', 'less:build2');

};
