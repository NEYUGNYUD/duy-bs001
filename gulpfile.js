/**
 * Created by duype on 10/27/2017.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('assets/scss/custom/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch("assets/scss/custom/*.scss", ['sass']);
    gulp.watch("*.html", ['sass']);
});

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ""
        }
    });
});

