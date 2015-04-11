/*
 * Crisp - API
 * Automated tasks (uses GruntJS)
 *
 * Copyright 2015, Hakuma Holdings Ltd.
 * Author: Valérian Saliou https://valeriansaliou.name/
 */


module.exports = function (grunt) {

    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Task: Shell
        shell: {
            run_test: {
                options: {
                    stderr: true
                },
                command: ('./tools/run.sh test')
            }
        },
        // Task: JSHint
        jshint: {
            options: {
                esnext: true
            },

            files: {
                src: ['rss_scrapper.js', 'web_scrapper.js', 'index.js']
            }
        }
    });


    // Load plugins
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-jshint');


    // Map tasks
    var GRUNT_TASKS_TEST = {
        all: [['lint', 0], ['shell', 0]]
    };

    var GRUNT_TASKS_LINT = {
        js: [['jshint', 0]]
    };


    // Register tasks
    grunt.registerTask('default', function () {
        return grunt.warn('Usage:' + '\n\n' + 'test - grunt test' + '\n\n');
    });

    grunt.registerTask('test', function () {
        for (var t in GRUNT_TASKS_TEST) {
            for (var i in GRUNT_TASKS_TEST[t]) {
                grunt.task.run(GRUNT_TASKS_TEST[t][i][0] + (GRUNT_TASKS_TEST[t][i][1] ? (':' + t) : ''));
            }
        }
    });

    grunt.registerTask('lint', function (t) {
        var lint_t_all = [];

        if (!t) {
            for (t in GRUNT_TASKS_LINT) {
                lint_t_all.push(t);
            }
        } else if (typeof GRUNT_TASKS_LINT[t] != 'object') {
            return grunt.warn('Invalid lint target name.\n');
        } else {
            lint_t_all.push(t);
        }

        for (var c in lint_t_all) {
            t = lint_t_all[c];

            for (var i in GRUNT_TASKS_LINT[t]) {
                grunt.task.run(GRUNT_TASKS_LINT[t][i][0] + (GRUNT_TASKS_LINT[t][i][1] ? (':' + t) : ''));
            }
        }
    });
};
