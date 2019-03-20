const gulp = require('gulp'),
    gulpRename = require('gulp-rename'),
    delFiles = require('del'),
    htmlMin = require('gulp-htmlmin'),
    gulpReplace = require('gulp-replace');

gulp.task('clean', () => {
    return delFiles(['*.html', 'cstv']);
});

gulp.task('main', () => {
    return gulp.src('app/html/page3969187.html')
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulpRename('main.html'))
        .pipe(gulp.dest('./'));
});

gulp.task('reception', () => {
    return gulp.src('app/html/page4396977.html')
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulpRename('reception.html'))
        .pipe(gulp.dest('./'));
});

// cstv
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
        .pipe(gulpRename('about.html'))
        .pipe(gulp.dest('./cstv'));
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
        .pipe(gulpRename('documents.html'))
        .pipe(gulp.dest('./cstv'));
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
        .pipe(gulpRename('documents.html'))
        .pipe(gulp.dest('./cstv'));
});

gulp.task('cstv:graduate', () => {
    return gulp.src('app/html/page4175062.html')
        .pipe(gulpReplace('="css/', '="../css/'))
        .pipe(gulpReplace('="js/', '="../js/'))
        .pipe(gulpReplace('\"images/', '\"../images/'))
        .pipe(gulpReplace('\'images/', '\'../images/'))
        .pipe(gulpReplace('target="_blank"> ', 'target="_parent">'))
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulpRename('graduate.html'))
        .pipe(gulp.dest('./cstv'));
});

gulp.task('cstv:employer', () => {
    return gulp.src('app/html/page4208064.html')
        .pipe(gulpReplace('="css/', '="../css/'))
        .pipe(gulpReplace('="js/', '="../js/'))
        .pipe(gulpReplace('\"images/', '\"../images/'))
        .pipe(gulpReplace('\'images/', '\'../images/'))
        .pipe(gulpReplace('target="_blank"> ', 'target="_parent">'))
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulpRename('employer.html'))
        .pipe(gulp.dest('./cstv'));
});

gulp.task('cstv:news', () => {
    return gulp.src('app/html/page5213876.html')
        .pipe(gulpReplace('="css/', '="../css/'))
        .pipe(gulpReplace('="js/', '="../js/'))
        .pipe(gulpReplace('\"images/', '\"../images/'))
        .pipe(gulpReplace('\'images/', '\'../images/'))
        .pipe(gulpReplace('target="_blank"> ', 'target="_parent">'))
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulpRename('news.html'))
        .pipe(gulp.dest('./cstv'));
});

gulp.task('cstv:research', () => {
    return gulp.src('app/html/page4198140.html')
        .pipe(gulpReplace('="css/', '="../css/'))
        .pipe(gulpReplace('="js/', '="../js/'))
        .pipe(gulpReplace('\"images/', '\"../images/'))
        .pipe(gulpReplace('\'images/', '\'../images/'))
        .pipe(gulpReplace('target="_blank"> ', 'target="_parent">'))
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulpRename('research.html'))
        .pipe(gulp.dest('./cstv'));
});

gulp.task('cstv:success', () => {
    return gulp.src('app/html/page4209200.html')
        .pipe(gulpReplace('="css/', '="../css/'))
        .pipe(gulpReplace('="js/', '="../js/'))
        .pipe(gulpReplace('\"images/', '\"../images/'))
        .pipe(gulpReplace('\'images/', '\'../images/'))
        .pipe(gulpReplace('target="_blank"> ', 'target="_parent">'))
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulpRename('success.html'))
        .pipe(gulp.dest('./cstv'));
});

gulp.task('cstv:monitoring', () => {
    return gulp.src('app/html/page4211252.html')
        .pipe(gulpReplace('="css/', '="../css/'))
        .pipe(gulpReplace('="js/', '="../js/'))
        .pipe(gulpReplace('\"images/', '\"../images/'))
        .pipe(gulpReplace('\'images/', '\'../images/'))
        .pipe(gulpReplace('target="_blank"> ', 'target="_parent">'))
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulpRename('monitoring.html'))
        .pipe(gulp.dest('./cstv'));
});

gulp.task('cstv:photo', () => {
    return gulp.src('app/html/page4117081.html')
        .pipe(gulpReplace('="css/', '="../css/'))
        .pipe(gulpReplace('="js/', '="../js/'))
        .pipe(gulpReplace('\"images/', '\"../images/'))
        .pipe(gulpReplace('\'images/', '\'../images/'))
        .pipe(gulpReplace('target="_blank"> ', 'target="_parent">'))
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulpRename('photo.html'))
        .pipe(gulp.dest('./cstv'));
});

gulp.task('cstv:vuz', () => {
    return gulp.src('app/html/page4215020.html')
        .pipe(gulpReplace('="css/', '="../css/'))
        .pipe(gulpReplace('="js/', '="../js/'))
        .pipe(gulpReplace('\"images/', '\"../images/'))
        .pipe(gulpReplace('\'images/', '\'../images/'))
        .pipe(gulpReplace('target="_blank"> ', 'target="_parent">'))
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulpRename('vuz.html'))
        .pipe(gulp.dest('./cstv'));
});

gulp.task('cstv:feedback', () => {
    return gulp.src('app/html/page4215461.html')
        .pipe(gulpReplace('="css/', '="../css/'))
        .pipe(gulpReplace('="js/', '="../js/'))
        .pipe(gulpReplace('\"images/', '\"../images/'))
        .pipe(gulpReplace('\'images/', '\'../images/'))
        .pipe(gulpReplace('target="_blank"> ', 'target="_parent">'))
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulpRename('feedback.html'))
        .pipe(gulp.dest('./cstv'));
});

gulp.task('cstv:competences', () => {
    return gulp.src('app/html/page4209734.html')
        .pipe(gulpReplace('="css/', '="../css/'))
        .pipe(gulpReplace('="js/', '="../js/'))
        .pipe(gulpReplace('\"images/', '\"../images/'))
        .pipe(gulpReplace('\'images/', '\'../images/'))
        .pipe(gulpReplace('target="_blank"> ', 'target="_parent">'))
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulpRename('competences.html'))
        .pipe(gulp.dest('./cstv'));
});

gulp.task('cstv:archive', () => {
    return gulp.src('app/html/page4216643.html')
        .pipe(gulpReplace('="css/', '="../css/'))
        .pipe(gulpReplace('="js/', '="../js/'))
        .pipe(gulpReplace('\"images/', '\"../images/'))
        .pipe(gulpReplace('\'images/', '\'../images/'))
        .pipe(gulpReplace('target="_blank"> ', 'target="_parent">'))
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulpRename('archive.html'))
        .pipe(gulp.dest('./cstv'));
});

gulp.task('cstv:menu', () => {
    return gulp.src('app/html/page4240226.html')
        .pipe(gulpReplace('="css/', '="../css/'))
        .pipe(gulpReplace('="js/', '="../js/'))
        .pipe(gulpReplace('\"images/', '\"../images/'))
        .pipe(gulpReplace('\'images/', '\'../images/'))
        .pipe(gulpReplace('target="_blank"> ', 'target="_parent">'))
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulpRename('menu.html'))
        .pipe(gulp.dest('./cstv'));
});

// /cstv


gulp.task('default', gulp.series(
    'clean',
    gulp.parallel(
        'main',
        'reception',
        'cstv:about',
        'cstv:news',
        'cstv:documents',
        'cstv:graduate',
        'cstv:employer',
        'cstv:competences',
        'cstv:research',
        'cstv:success',
        'cstv:monitoring',
        'cstv:photo',
        'cstv:vuz',
        'cstv:feedback',
        'cstv:archive',
        'cstv:menu',
    )
));