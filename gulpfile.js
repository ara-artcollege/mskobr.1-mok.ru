const gulp = require('gulp'),
    delFiles = require('del'),
    download = require('gulp-download-files'),
    gulpReplace = require('gulp-replace');

gulp.task('download:tilda', () => {
    return download({
        'reception/priem.html':
            'http://main.mskobr.1-mok.ru/reception/priem/',

        'reception/mos.html':
            'http://main.mskobr.1-mok.ru/reception/mos/',

        'reception/budget.html':
            'http://main.mskobr.1-mok.ru/reception/budget/',

        'reception/ball.html':
            'http://main.mskobr.1-mok.ru/reception/ball/',

        'reception/perechen-ispytaniy.html':
            'http://main.mskobr.1-mok.ru/reception/perechen-ispytaniy/',

        'reception/zaochnoe.html':
            'http://main.mskobr.1-mok.ru/reception/zaochnoe/',

        'reception/platnoe.html':
            'http://main.mskobr.1-mok.ru/reception/platnoe/',

        'reception/perevod.html':
            'http://main.mskobr.1-mok.ru/reception/perevod/',

        'reception/voprosy.html':
            'http://main.mskobr.1-mok.ru/reception/voprosy/',

        'reception/medosmotr.html':
            'http://main.mskobr.1-mok.ru/reception/medosmotr/',

        'reception/documents.html':
            'http://main.mskobr.1-mok.ru/reception/documents/',

        'reception/adres.html':
            'http://main.mskobr.1-mok.ru/reception/adres/',

        'reception/voprosy.html':
            'http://main.mskobr.1-mok.ru/reception/voprosy/',

        'main.html':
            'http://main.mskobr.1-mok.ru/main/',

        'school/pervoklassnik.html':
            'http://main.mskobr.1-mok.ru/school/pervoklassnik/',

        'school/pro.html':
            'http://main.mskobr.1-mok.ru/school/pro/',

        'cstv/about.html':
            'http://main.mskobr.1-mok.ru/cstv/about/',

        'cstv/news.html':
            'http://main.mskobr.1-mok.ru/cstv/news/',

        'cstv/documents.html':
            'http://main.mskobr.1-mok.ru/cstv/documents/',

        'cstv/graduate.html':
            'http://main.mskobr.1-mok.ru/cstv/graduate/',

        'cstv/employer.html':
            'http://main.mskobr.1-mok.ru/cstv/employer/',

        'cstv/competences.html':
            'http://main.mskobr.1-mok.ru/cstv/competences/',

        'cstv/research.html':
            'http://main.mskobr.1-mok.ru/cstv/research/',

        'cstv/success.html':
            'http://main.mskobr.1-mok.ru/cstv/success/',

        'cstv/monitoring.html':
            'http://main.mskobr.1-mok.ru/cstv/monitoring/',

        'cstv/photo.html':
            'http://main.mskobr.1-mok.ru/cstv/photo/',

        'cstv/vuz.html':
            'http://main.mskobr.1-mok.ru/cstv/vuz/',

        'cstv/archive.html':
            'http://main.mskobr.1-mok.ru/cstv/archive/',

        'cstv/feedback.html':
            'http://main.mskobr.1-mok.ru/cstv/feedback/',

        'cstv/menu.html':
            'http://main.mskobr.1-mok.ru/cstv/menu/',

        'mesh.html':
            'http://main.mskobr.1-mok.ru/mesh/',

        '404/404.html':
            'http://main.mskobr.1-mok.ru/error/',

        'detsky-sad/detsky-sad.html':
            'http://main.mskobr.1-mok.ru/detsky-sad/',

        'mail-tnx.html':
            'http://main.mskobr.1-mok.ru/mail-tnx/'

    })
        .pipe(gulp.dest('tilda'));
});

gulp.task('clean', () => {
    return delFiles([
        '*.html',
        'detsky-sad/*.html',
        'cstv',
        'school',
        'reception'
    ]);
});

gulp.task('clean:tilda', () => {
    return delFiles(['tilda']);
});

gulp.task('main', () => {
    return gulp.src('tilda/*.html')
        .pipe(gulpReplace('target="_blank">~', 'target="_top">'))
        .pipe(gulp.dest('./'));
});

gulp.task('detsky-sad', () => {
    return gulp.src('tilda/detsky-sad/detsky-sad.html')
        .pipe(gulpReplace('</body>', '<script src="script.js?v=1.0"></script></body>'))
        .pipe(gulp.dest('detsky-sad'));
});

gulp.task('404', () => {
    return gulp.src('tilda/404/404.html')
        .pipe(gulpReplace('target="_blank">~', 'target="_top">'))
        .pipe(gulp.dest('./'));
});

gulp.task('school', () => {
    return gulp.src('tilda/school/*.html')
        .pipe(gulp.dest('./school'));
});

gulp.task('cstv', () => {
    return gulp.src('tilda/cstv/*.html')
        .pipe(gulpReplace('target="_blank">~', 'target="_top">'))
        .pipe(gulp.dest('./cstv'));
});

gulp.task('reception', () => {
    return gulp.src('tilda/reception/*.html')
        .pipe(gulpReplace('target="_blank">~', 'target="_top">'))
        .pipe(gulp.dest('./reception'));
});


gulp.task('default', gulp.series(
    'clean', 'download:tilda',
    gulp.parallel(
        'main',
        'school',
        'cstv',
        'detsky-sad',
        '404',
        'reception'
    ),
    'clean:tilda'
));