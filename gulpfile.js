"use strict"
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');  
var size = require('gulp-filesize');

var resourceSrc = './resource/assets/';
var destSrc = './public/assets/';
gulp.task('sass',function(){
	gulp.src(resourceSrc+'sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest(destSrc+'css'))
    .pipe(uglify());
});





gulp.task('watch',function(){
	gulp.watch(resourceSrc+'./sass/**/*.scss',['sass']);
});


gulp.task('default',['sass']);