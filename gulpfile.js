// grab our gulp packages
var gulp  = require('gulp'),
    log   = require('fancy-log'),
    jshint = require('gulp-jshint');

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
    log("Inside watch")
  gulp.watch('src/js/**/*.js', gulp.series('jshint'));
});

// Default task stub
gulp.task('default', function(cb) {
    cb();
});

gulp.task('build', function(cb) {
    cb(); // stub for build
});