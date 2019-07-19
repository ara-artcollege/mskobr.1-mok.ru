const gulp = require('gulp'),
    delFiles = require('del'),
    download = require('gulp-download-files'),
    gulpReplace = require('gulp-replace');

gulp.task('download:tilda', () => {
    return download({
        'reception/priem.html':
            'http://1-mok.mskobr.tilda.ws/reception/priem/',

        'reception/mos.html':
            'http://1-mok.mskobr.tilda.ws/reception/mos/',

        'reception/budget.html':
            'http://1-mok.mskobr.tilda.ws/reception/budget/',

        'reception/ball.html':
            'http://1-mok.mskobr.tilda.ws/reception/ball/',

        'reception/perechen-ispytaniy.html':
            'http://1-mok.mskobr.tilda.ws/reception/perechen-ispytaniy/',

        'reception/zaochnoe.html':
            'http://1-mok.mskobr.tilda.ws/reception/zaochnoe/',

        'reception/platnoe.html':
            'http://1-mok.mskobr.tilda.ws/reception/platnoe/',

        'reception/perevod.html':
            'http://1-mok.mskobr.tilda.ws/reception/perevod/',

        'reception/voprosy.html':
            'http://1-mok.mskobr.tilda.ws/reception/voprosy/',

        'reception/medosmotr.html':
            'http://1-mok.mskobr.tilda.ws/reception/medosmotr/',

        'reception/documents.html':
            'http://1-mok.mskobr.tilda.ws/reception/documents/',

        'reception/adres.html':
            'http://1-mok.mskobr.tilda.ws/reception/adres/',

        'reception/voprosy.html':
            'http://1-mok.mskobr.tilda.ws/reception/voprosy/',

        'main.html':
            'http://1-mok.mskobr.tilda.ws/main/',

        'school/pervoklassnik.html':
            'http://1-mok.mskobr.tilda.ws/school/pervoklassnik/',

        'school/pro.html':
            'http://1-mok.mskobr.tilda.ws/school/pro/',

        'cstv/about.html':
            'http://1-mok.mskobr.tilda.ws/cstv/about/',

        'cstv/news.html':
            'http://1-mok.mskobr.tilda.ws/cstv/news/',

        'cstv/documents.html':
            'http://1-mok.mskobr.tilda.ws/cstv/documents/',

        'cstv/graduate.html':
            'http://1-mok.mskobr.tilda.ws/cstv/graduate/',

        'cstv/employer.html':
            'http://1-mok.mskobr.tilda.ws/cstv/employer/',

        'cstv/competences.html':
            'http://1-mok.mskobr.tilda.ws/cstv/competences/',

        'cstv/research.html':
            'http://1-mok.mskobr.tilda.ws/cstv/research/',

        'cstv/success.html':
            'http://1-mok.mskobr.tilda.ws/cstv/success/',

        'cstv/monitoring.html':
            'http://1-mok.mskobr.tilda.ws/cstv/monitoring/',

        'cstv/photo.html':
            'http://1-mok.mskobr.tilda.ws/cstv/photo/',

        'cstv/vuz.html':
            'http://1-mok.mskobr.tilda.ws/cstv/vuz/',

        'cstv/archive.html':
            'http://1-mok.mskobr.tilda.ws/cstv/archive/',

        'cstv/feedback.html':
            'http://1-mok.mskobr.tilda.ws/cstv/feedback/',

        'cstv/menu.html':
            'http://1-mok.mskobr.tilda.ws/cstv/menu/',

        'mesh.html':
            'http://1-mok.mskobr.tilda.ws/mesh/',

        '404/404.html':
            'http://1-mok.mskobr.tilda.ws/error/',

        'detsky-sad/detsky-sad.html':
            'http://1-mok.mskobr.tilda.ws/detsky-sad/',

        'mail-tnx.html':
            'http://1-mok.mskobr.tilda.ws/mail-tnx/'

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