var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var source = require('vinyl-source-stream');

gulp.task('default', function(done) {
  browserify('./src/wlt.js', {standalone: 'bitcoin', debug: true})
  .transform(babelify, {presets: ['es2015']})
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('static/scripts'))
  done();
});
