// Testacular configuration
// Generated on Fri Mar 15 2013 15:43:53 GMT+0000 (GMT)


// base path, that will be used to resolve files and exclude
basePath = '../../../';


// list of files / patterns to load in the browser
files = [JASMINE, JASMINE_ADAPTER]
  .concat(require(__dirname + "/../files/source"))
  .concat(require(__dirname + "/../files/integration_tests"));


// list of files to exclude
exclude = [
  'src/sockjs/**/*',
  'src/web-socket-js/**/*'
];


preprocessors = {
  '**/src/**/*.js': 'coverage'
};


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress', 'coverage'];


coverageReporter = {
  type : 'html',
  dir : 'coverage/'
}


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome', 'ChromeCanary', 'Firefox', 'Opera', 'Safari'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
