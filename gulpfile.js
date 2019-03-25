const gulp = require('gulp'),
    delFiles = require('del'),
    download = require('gulp-download-files'),
    gulpReplace = require('gulp-replace');

gulp.task('download:tilda', () => {
    return download({
                    'reception.html':
                    'http://mskobr.tilda.ws/reception/',

                    'main.html':
                    'http://mskobr.tilda.ws/main/',

                    'school/pervoklassnik.html':
                    'http://mskobr.tilda.ws/school/pervoklassnik/',

                    'school/pro.html':
                    'http://mskobr.tilda.ws/school/pro/',

                    'cstv/about.html':
                    'http://mskobr.tilda.ws/cstv/about/',

                    'cstv/news.html':
                    'http://mskobr.tilda.ws/cstv/news/',

                    'cstv/documents.html':
                    'http://mskobr.tilda.ws/cstv/documents/',

                    'cstv/graduate.html':
                    'http://mskobr.tilda.ws/cstv/graduate/',

                    'cstv/employer.html':
                    'http://mskobr.tilda.ws/cstv/employer/',

                    'cstv/competences.html':
                    'http://mskobr.tilda.ws/cstv/competences/',

                    'cstv/research.html':
                    'http://mskobr.tilda.ws/cstv/research/',

                    'cstv/success.html':
                    'http://mskobr.tilda.ws/cstv/success/',

                    'cstv/monitoring.html':
                    'http://mskobr.tilda.ws/cstv/monitoring/',

                    'cstv/photo.html':
                    'http://mskobr.tilda.ws/cstv/photo/',

                    'cstv/vuz.html':
                    'http://mskobr.tilda.ws/cstv/vuz/',

                    'cstv/archive.html':
                    'http://mskobr.tilda.ws/cstv/archive/',

                    'cstv/feedback.html':
                    'http://mskobr.tilda.ws/cstv/feedback/',

                    'cstv/menu.html':
                    'http://mskobr.tilda.ws/cstv/menu/',

                    '404/404.html':
                    'http://mskobr.tilda.ws/error/'

                    })
        .pipe(gulp.dest('tilda'))
});

gulp.task('clean', () => {
    return delFiles([
                    '*.html',
                    'cstv',
                    'school'
                ]);
});

gulp.task('clean:tilda', () => {
    return delFiles(['tilda']);
});

gulp.task('main', () => {
    return gulp.src('tilda/*.html')
        .pipe(gulp.dest('./'))
});

gulp.task('404', () => {
    return gulp.src('tilda/404/404.html')
        .pipe(gulpReplace('target="_blank">~', 'target="_top">'))
        .pipe(gulp.dest('./'))
});

gulp.task('school', () => {
    return gulp.src('tilda/school/*.html')
        .pipe(gulp.dest('./school'))
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
        'school',
        'cstv',
        '404'
    ),
    'clean:tilda'
));