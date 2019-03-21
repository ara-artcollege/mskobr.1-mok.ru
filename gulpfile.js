const gulp = require('gulp'),
    gulpRename = require('gulp-rename'),
    delFiles = require('del'),
    htmlMin = require('gulp-htmlmin'),
    gulpReplace = require('gulp-replace');

gulp.task('clean', () => {
    return delFiles(['*.html', 'cstv']);
});

gulp.task('main', () => {
    return gulp.src([
            'tilda/html/page3969187.html',
            'tilda/html/page4396977.html'
        ])
        .pipe(htmlMin({
            collapseWhitespace: true
        }))        
        .pipe(gulpRename(function(path){
            let rules = {
                'page3969187': 'main',
                'page4396977': 'reception'
            };
            path.basename = rules[path.basename]
        }))
        .pipe(gulp.dest('./'))
});

gulp.task('cstv', () => {
    return gulp.src([
            'tilda/html/page4024424.html',
            'tilda/html/page4117307.html',
            'tilda/html/page4175062.html',
            'tilda/html/page4208064.html',
            'tilda/html/page5213876.html',
            'tilda/html/page4198140.html',
            'tilda/html/page4209200.html',
            'tilda/html/page4211252.html',
            'tilda/html/page4117081.html',
            'tilda/html/page4215020.html',
            'tilda/html/page4215461.html',
            'tilda/html/page4209734.html',
            'tilda/html/page4216643.html',
            'tilda/html/page4240226.html'
        ])
        .pipe(gulpReplace('="css/', '="../css/'))
        .pipe(gulpReplace('="js/', '="../js/'))
        .pipe(gulpReplace('\"images/', '\"../images/'))
        .pipe(gulpReplace('\'images/', '\'../images/'))
        .pipe(gulpReplace('target="_blank">~', 'target="_top">'))        
        .pipe(htmlMin({ collapseWhitespace: true }))        
        .pipe(gulpRename(function(path){
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
    'clean',
    gulp.parallel(
        'main',
        'cstv'
    )
));