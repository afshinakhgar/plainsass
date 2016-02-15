"use strict"
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');  
//var size = require('gulp-filesize');

var resourceSrc = 'resource/assets/';
var output = './public/asstes/';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded',
  indentedSyntax: true
};
gulp.task('sass',function(){
	gulp.src(resourceSrc+'**/*.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
	.pipe(gulp.dest(output+'css'));
});

gulp.task('watch',function(){
	gulp.watch(resourceSrc+'sass/**/*.scss',['sass']);
});
gulp.task('default',['sass']);
