module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],

	preprocessors: {
		'src/js/*.js': ['coverage']
	},


    // list of files / patterns to load in the browser
    files: [
	  'lib/classlist/**/classList.js',
	  'lib/es5-shim/es5-shim.js',
	  'lib/dxjs/src/dx.core.js',
	  'lib/dxjs/src/dx.*.js',
	  'src/js/*.js',
      'test/js/*.unit.spec.js'
    ],


    // list of files to exclude
    exclude: [
      
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['dots', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 30000
  });
};
