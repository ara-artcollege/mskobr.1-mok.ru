const gulp = require('gulp'),
    gulpRename = require('gulp-rename'),
    delFiles = require('del'),
    htmlMin = require('gulp-htmlmin'),
    download = require('gulp-download-files'),
    gulpReplace = require('gulp-replace');

gulp.task('clean', () => {
    return delFiles(['*.html', 'cstv']);
});
gulp.task('clean:tilda', () => {
    return delFiles(['tilda']);
});

gulp.task('download:tilda', () => {
    return download({
                    'reception.html':       'http://mskobr.tilda.ws/reception/',
                    'main.html':            'http://mskobr.tilda.ws/main/',
                    'page4024424.html': 'http://mskobr.tilda.ws/cstv/about/',
                    'page5213876.html': 'http://mskobr.tilda.ws/cstv/news/',
                    'page4117307.html': 'http://mskobr.tilda.ws/cstv/documents/',
                    'page4175062.html': 'http://mskobr.tilda.ws/cstv/graduate/',
                    'page4208064.html': 'http://mskobr.tilda.ws/cstv/employer/',
                    'page4209734.html': 'http://mskobr.tilda.ws/cstv/competences/',
                    'page4198140.html': 'http://mskobr.tilda.ws/cstv/research/',
                    'page4209200.html': 'http://mskobr.tilda.ws/cstv/success/',
                    'page4211252.html': 'http://mskobr.tilda.ws/cstv/monitoring/',
                    'page4117081.html': 'http://mskobr.tilda.ws/cstv/photo/',
                    'page4215020.html': 'http://mskobr.tilda.ws/cstv/vuz/',
                    'page4216643.html': 'http://mskobr.tilda.ws/cstv/archive/',
                    'page4215461.html': 'http://mskobr.tilda.ws/cstv/feedback/',
                    'page4240226.html': 'http://mskobr.tilda.ws/cstv/menu/',
                    'pervoklassnik.html':   'http://mskobr.tilda.ws/pervoklassnik/'
                    })
        .pipe(gulp.dest('tilda'))
});

gulp.task('main', () => {
    return gulp.src([
            'tilda/main.html',
            'tilda/reception.html',
            'tilda/pervoklassnik.html'
        ])
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./'))
});

gulp.task('cstv', () => {
    return gulp.src([
            'tilda/page4024424.html',
            'tilda/page4117307.html',
            'tilda/page4175062.html',
            'tilda/page4208064.html',
            'tilda/page5213876.html',
            'tilda/page4198140.html',
            'tilda/page4209200.html',
            'tilda/page4211252.html',
            'tilda/page4117081.html',
            'tilda/page4215020.html',
            'tilda/page4215461.html',
            'tilda/page4209734.html',
            'tilda/page4216643.html',
            'tilda/page4240226.html'
        ])
        .pipe(gulpReplace('target="_blank">~', 'target="_top">'))
        .pipe(htmlMin({
            collapseWhitespace: true
        }))
        .pipe(gulpRename(function (path) {
            let rules = {
                'page4024424': 'about',
                'page4117307': 'documents',
                'page4175062': 'graduate',
                'page4208064': 'employer',
                'page5213876': 'news',
                'page4198140': 'research',
                'page4209200': 'success',
                'page4211252': 'monitoring',
                'page4117081': 'photo',
                'page4215020': 'vuz',
                'page4215461': 'feedback',
                'page4209734': 'competences',
                'page4216643': 'archive',
                'page4240226': 'menu'
            };
            path.basename = rules[path.basename]
        }))
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