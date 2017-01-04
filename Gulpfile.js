'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minCss = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')

    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/css'))

    // Minified version
    .pipe(minCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./dist/css'))

    ;
});

gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});
