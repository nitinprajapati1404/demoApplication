var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');

var removeFiles = require('gulp-remove-files');
var gulpSequence = require('gulp-sequence')

var htmlmin = require('gulp-htmlmin');
var angularTemplateCache = require('gulp-angular-templatecache');

var rename = require("gulp-rename");
var browserSync = require('browser-sync');


/*
 * List of all javascript files which we need to concat and minify
 * Good practice is to make proper order of file in array
 * @type Array
 */
var allJs = [
    './js/all.js',
    './lib/angular.js',
    './lib/angular-route.js',
    './lib/ui-bootstrap-tpls-0.11.0.min.js',
    './scripts/app.js',
    './scripts/constant.js',
    './scripts/httpMethodService.js',
    './modules/common/directive.js',
    './modules/home/home.js',
    './modules/aboutus/aboutus.js',
    './modules/contactus/contactus.js',
    './modules/products/products.js',
    './js/owl.carousel.min.js',
];
/*
 * List of all css files which we need to concat and minify
 * Good practice is to make proper order of file in array
 * @type Array
 */
var allCss = [
    './css/owl.carousel.css',
    './css/owl.theme.css',
    './css/css.css',
    './css/all.css',
];
/*
 * To clear/remove old file on deployment
 * @param {type} param1
 * @param {type} param2
 */
gulp.task('clearJson', function () {
    gulp.src(['./gulp-assets-version-replace-version.json', "./dist/*.*"])
            .pipe(removeFiles());
});
/*
 * To generate file with unique name and replate newly created name in index.html
 */
gulp.task('clearCache', function () {
    var assetsVersionReplace = require('gulp-assets-version-replace');

    gulp.src(["./applicaiton.js", "./applicaitonTemplates.js", "./css/applicaiton.css"])
            .pipe(assetsVersionReplace({
                replaceTemplateList: [
                    './index.min.html'
                ]
            }))
            .pipe(gulp.dest('./dist/'))
})
/*
 * To run clearJson and clearCache in sequence
 */
gulp.task('cache', function (cb) {
    gulpSequence('clearJson')(function (err1) {
        console.log('clearJson', err1);
        setTimeout(function () {
            gulpSequence('clearCache')(function (err2) {
                console.log('clearCache', err2);
            })
        }, 5000)
    })
});
//var browserSync = require("browser-sync").create();
/*
 * To merge and minify all javascripts
 */
gulp.task('js-con-min', function () {
    gulp.src(allJs)
            .pipe(concat('applicaiton.js'))
            .pipe(uglify({ compress: { drop_console: true } }))
            .pipe(gulp.dest('./'))
});
/*
 * To merge and minify all css
 */

gulp.task('css-con-min', function () {
    gulp.src(allCss)
            .pipe(concat('applicaiton.css'))
            .pipe(minify())
            .pipe(gulp.dest('./css/'));
});
/*
 * To merge and cached all angular templates
 */
gulp.task('templates', function () {
    return gulp.src('./modules/**/*.html')
            .pipe(htmlmin())
            .pipe(angularTemplateCache('applicaitonTemplates.js', {
                module: 'demoApp',
                root: 'modules'
            }))
            .pipe(gulp.dest('./'));
});

gulp.task('default', ['templates', 'css-con-min'], function () {
    setTimeout(function () {
        gulpSequence('js-con-min')(function (err1) {})
    }, 5000);

//    gulp.watch('./css/**/**/*.css', function () {
//        // run styles upon changes
//        gulp.run('css-con-min');
//    });
//    gulp.watch(['./scripts/**/**/*.js', './modules/**/**/*.js', './modules/**/**/*.html'], function () {
////         run styles upon changes
//        gulp.run('js-con-min');
//    });
});
//browserSync.init({
//    files: ['./scripts/**/**/*.js', './modules/**/**/*.js', './modules/**/**/*.html'],
//    server: true
//});