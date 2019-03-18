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

gulp.task('clean', () => {
    return delFiles()
})

gulp.task('html:watch', () => {
    return gulp.watch('app/html/*.html', gulp.parallel('main'))
})

gulp.task('default',
    gulp.parallel('main'));