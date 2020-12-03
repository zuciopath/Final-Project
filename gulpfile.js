
'use strict';
 
const { parallel } = require('gulp');
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('style'));
});
 
gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', gulp.parallel('sass'));
})