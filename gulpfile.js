const gulp = require('gulp'),
    gulpRename = require('gulp-rename'),
    delFiles = require('del'),
    htmlMin = require('gulp-htmlmin'),
    gulpReplace = require('gulp-replace');


gulp.task('main', () => {
    return gulp.src('app/html/page3969187.html')
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulpRename('/main.html'))
        .pipe(gulp.dest('./'));
});

gulp.task('reception', () => {
    return gulp.src('app/html/page4396977.html')
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulpRename('/reception.html'))
        .pipe(gulp.dest('./'));
});

gulp.task('cstv:about', () => {
    return gulp.src('app/html/page4024424.html')
        .pipe(gulpReplace('="css/', '="../css/'))
        .pipe(gulpReplace('="js/', '="../js/'))
        .pipe(gulpReplace('\"images/', '\"../images/'))
        .pipe(gulpReplace('\'images/', '\'../images/'))
        .pipe(gulpReplace('target="_blank"> ', 'target="_parent">'))
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulpRename('cstv/about.html'))
        .pipe(gulp.dest('./'));
});

gulp.task('cstv:documents', () => {
    return gulp.src('app/html/page4117307.html')
        .pipe(gulpReplace('="css/', '="../css/'))
        .pipe(gulpReplace('="js/', '="../js/'))
        .pipe(gulpReplace('\"images/', '\"../images/'))
        .pipe(gulpReplace('\'images/', '\'../images/'))
        .pipe(gulpReplace('target="_blank"> ', 'target="_parent">'))
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulpRename('cstv/documents.html'))
        .pipe(gulp.dest('./'));
});

gulp.task('clean', () => {
    return delFiles(['*.html', 'cstv']);
});


gulp.task('default', gulp.series(
    'clean',
    gulp.parallel(
        'main',
        'reception',
        'cstv:about',
        'cstv:documents'
    )
));

gulp.task('w', () => {
    return gulp.watch('app/html/*.html', gulp.series('default'))
})