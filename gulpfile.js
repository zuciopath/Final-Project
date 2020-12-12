
gulp.task('watch', function(){

});
const { parallel, task } = require('gulp');
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('css/style.css')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('styles'));
});
 
gulp.task('watch', function () {
  gulp.watch('css/**/*.css', gulp.parallel('sass'));
})