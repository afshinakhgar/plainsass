"use strict"
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');  
var size = require('gulp-size');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

var resourceSrc = './resource/assets/';
var output = './public/assets/';
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'	
};

// Sass Compile 
gulp.task('sass',function(cb){
	gulp.src(resourceSrc+'sass/**/*.scss')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(concat('app.css'))
	.pipe(gulp.dest(output+'css/src'))
	.pipe(size());
    cb();
});



/*Minify and sourcemap For css Compiled by sass*/
gulp.task('minify-css',['sass'], function() {
	setTimeout(
		function(){
			return gulp.src(output+'css/src/*.css')
		    .pipe(sourcemaps.init())
		    .pipe(minifyCss({compatibility: 'ie8'}))
		    .pipe(concat('app.css'))
		    .pipe(sourcemaps.write('.'))
		    .pipe(gulp.dest(output+'css/run'));
		},500
	);
  	
});
gulp.task('watch',function(){
	gulp.watch(resourceSrc+'sass/**/*.scss',['sass']);
});
gulp.task('default',['minify-css','sass']);
// gulp.task('default',['sass']);
