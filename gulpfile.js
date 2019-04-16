// grab our gulp packages
var gulp  = require('gulp'),
    log   = require('fancy-log');

// create a default task and just log a message
gulp.task('default', function(cb) {
  log('Gulp is running!')
  cb()
});