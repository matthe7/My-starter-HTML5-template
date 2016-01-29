var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    concat      = require('gulp-concat'),
    rename      = require('gulp-rename'),
    cssmin      = require('gulp-minify-css'),
    jshint      = require('gulp-jshint'),
	imagemin    = require('gulp-imagemin'),
	notify      = require('gulp-notify'),
    watch       = require('gulp-watch'),
	uglify      = require('gulp-uglify');

gulp.task('scss', function () {
    return gulp.src('resources/scss/style.scss')
        .pipe(sass())
        .pipe(cssmin())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('public/css'));
});

gulp.task('js', function () {
    return gulp.src([
        'resources/js/main.js'
    ])
        .pipe(jshint())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('public/js'))
});

gulp.task('default', ['scss', 'js']);

gulp.task('watch', function () {
    gulp.watch('resources/scss/*.scss', ['scss']);
    gulp.watch('resources/js/*.js', ['js']);
});