const less = require('gulp-less');
const gulp = require('gulp');
//const watchLess = require('gulp-watch-less');
//const watch = require('gulp-watch');
gulp.task('less', function () {
    return gulp.src('./css/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    gulp.watch('./css/styles.less',gulp.series('less'));
});

/*gulp.task('default', function () {
    return gulp.src('./css/styles.less')
        .pipe(watchLess('./css/styles.less'))
        .pipe(less())
        .pipe(gulp.dest('dist'));
});*/
/*function defaultTask() {
    gulp.src('./css/styles.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(gulp.dest('./dist'));
}

exports.default = defaultTask*/