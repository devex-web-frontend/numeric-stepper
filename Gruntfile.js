module.exports = function(grunt) {
	'use strict';

	var prod = !!grunt.option('prod');

	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			build: ['src/**/*.js']
		},

		clean: {
			dependencies: ['lib/'],
			css: ['test/css']
		},
		connect: {
			test: {
				options: {
					port: 3000,
					hostname: '0.0.0.0',
					base: '.'
				}
			}
		},
		karma: {
			unit: {
				configFile: 'karma.unit.conf.js',
				singleRun: prod,
				autoWatch: !prod,
				browsers: ['PhantomJS'],
				coverageReporter: {
					reporters: [
						{
							type: 'html',
							dir: 'coverage'
						}, {
							type: 'text-summary'
						}
					]
				}
			},

			ui: {
				configFile: 'karma.ui.conf.js',
				singleRun: prod,
				autoWatch: !prod,
				browsers: ['Chrome']
			}
		},
		shell: {
			bower_install: {
				command: 'node node_modules/bower/bin/bower install'
			}
		},
		stylus: {
			compile: {
				files: {
					'test/js/css/test.css': 'test/js/styl/test.styl'
				}
			}
		},
		watch: {
			stylus: {
				files: ['test/js/styl/test.styl'],
				tasks: ['stylus:compile']
			}
		},
		jscs: {
			options: {
				config: '.jscsrc'
			},
			files: ['src/**/*.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-interactive-shell');
	grunt.loadNpmTasks('grunt-jscs-checker');
	grunt.loadNpmTasks('grunt-karma');


	grunt.registerTask('check_style', ['jscs', 'jshint']);
	grunt.registerTask('install', ['clean:dependencies', 'shell:bower_install']);
	grunt.registerTask('css', ['clean:css', 'stylus:compile']);
	grunt.registerTask('test_unit', ['karma:unit']);
	grunt.registerTask('test_ui', ['css', 'connect:test', 'karma:ui']);
	grunt.registerTask('test', ['check_style', 'test_unit', 'test_ui']);
	grunt.registerTask('build', ['test']);
	grunt.registerTask('default', ['install', 'build']);
};