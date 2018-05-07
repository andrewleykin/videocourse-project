module.exports = function() {
    $.gulp.task('html', () => {
        return $.gulp.src('./dev/html/**/*.html')
            .pipe($.gulp.dest('./build/'))
            .pipe($.browserSync.reload({
                stream: true
            }));;
    });
};
