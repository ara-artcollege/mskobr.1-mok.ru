const   gulp = require('gulp'),
        gulpRename = require('gulp-rename'),
        delFiles = require('del'),
        htmlMin = require('gulp-htmlmin');



gulp.task('main', () => {
    return gulp.src('app/html/page3969187.html')
        .pipe(htmlMin({ collapseWhitespace: true }))
        .pipe(gulpRename('/main.html'))
        .pipe(gulp.dest('./'));
});

gulp.task('reception', () => {
    return gulp.src('app/html/page4396977.html')
        .pipe(htmlMin({ collapseWhitespace: true }))
        .pipe(gulpRename('/reception.html'))
        .pipe(gulp.dest('./'));
});




gulp.task('clean', () => {
    return delFiles('*.html');
})

gulp.task('w', () => {
    return gulp.watch('app/html/*.html', gulp.series('default'))
})

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel(
        'main',
        'reception',
        )
));