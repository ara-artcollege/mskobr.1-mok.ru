const gulp = require('gulp'),
    delFiles = require('del'),
    download = require('gulp-download-files'),
    gulpReplace = require('gulp-replace');

gulp.task('download:tilda', () => {
    return download({
                    'reception.html':           'http://mskobr.tilda.ws/reception/',
                    'main.html':                'http://mskobr.tilda.ws/main/',
                    'pervoklassnik.html':       'http://mskobr.tilda.ws/pervoklassnik/',
                    'cstv/about.html':          'http://mskobr.tilda.ws/cstv/about/',
                    'cstv/news.html':           'http://mskobr.tilda.ws/cstv/news/',
                    'cstv/documents.html':      'http://mskobr.tilda.ws/cstv/documents/',
                    'cstv/graduate.html':       'http://mskobr.tilda.ws/cstv/graduate/',
                    'cstv/employer.html':       'http://mskobr.tilda.ws/cstv/employer/',
                    'cstv/competences.html':    'http://mskobr.tilda.ws/cstv/competences/',
                    'cstv/research.html':       'http://mskobr.tilda.ws/cstv/research/',
                    'cstv/success.html':        'http://mskobr.tilda.ws/cstv/success/',
                    'cstv/monitoring.html':     'http://mskobr.tilda.ws/cstv/monitoring/',
                    'cstv/photo.html':          'http://mskobr.tilda.ws/cstv/photo/',
                    'cstv/vuz.html':            'http://mskobr.tilda.ws/cstv/vuz/',
                    'cstv/archive.html':        'http://mskobr.tilda.ws/cstv/archive/',
                    'cstv/feedback.html':       'http://mskobr.tilda.ws/cstv/feedback/',
                    'cstv/menu.html':           'http://mskobr.tilda.ws/cstv/menu/'

                    })
        .pipe(gulp.dest('tilda'))
});

gulp.task('clean', () => {
    return delFiles(['*.html', 'cstv']);
});

gulp.task('clean:tilda', () => {
    return delFiles(['tilda']);
});

gulp.task('main', () => {
    return gulp.src('tilda/*.html')
        .pipe(gulp.dest('./'))
});

gulp.task('cstv', () => {
    return gulp.src('tilda/cstv/*.html')
        .pipe(gulpReplace('target="_blank">~', 'target="_top">'))
        .pipe(gulp.dest('./cstv'))
});


gulp.task('default', gulp.series(
    'clean', 'download:tilda',
    gulp.parallel(
        'main',
        'cstv'
    ),
    'clean:tilda'
));