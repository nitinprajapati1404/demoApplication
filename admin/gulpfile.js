var gulp = require('gulp');
var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var plumber = require('gulp-plumber'); 
var bytediff = require('gulp-bytediff');
var htmlreplace = require('gulp-html-replace');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var angularTemplateCache = require('gulp-angular-templatecache');
var randomstring = require("randomstring");
var removeFiles = require('gulp-remove-files');

var cssRandomStr = randomstring.generate(15);
var htmlRandomStr = randomstring.generate(15);
var jsRandomStr = randomstring.generate(15);

var destinationDir = 'dist';
var appJsFiles = 'app/**/*.js',  
    jsDest = 'dist/app';

//angluar library list
var angLib = ["lib/angular-1.4.14/angular.js",
			  "lib/angular-1.4.14/angular-route.js",
			  "lib/angular-1.4.14/angular-messages.min.js",
			  "lib/ui-bootstrap-tpls-2.5.0.min.js",
			  "lib/angular-underscore.js",
			  "lib/angular-growl.js",
			  "lib/angular-confirm.js",
			  "lib/angular-wizard.min.js",
			  "lib/angular-moment.min.js",
			  "lib/trix.js",
			  "lib/angular-trix.js",
			  "lib/bootstrap-colorpicker-module.js"]

var jqueryLib = ["assets/js/jQuery/jquery-2.2.3.min.js",
				"assets/js/underscore-min.js",	
				"assets/js/bootstrap.js",
				"assets/js/sparkline/jquery.sparkline.min.js",
				"assets/js/slimScroll/jquery.slimscroll.min.js",
				"assets/js/admin.js",
				"assets/js/jquery.prettyPhoto.js",
				"assets/js/moment-with-locales.js"]
				
var cssLib = ["assets/css/bootstrap.css",
				"assets/css/font-awesome.min.css",
				"assets/css/AdminLTE.css",
				"assets/css/skins/skin-blue.css",
				"lib/angular-growl.css",
				"lib/angular-wizard.min.css",
				"assets/css/prettyPhoto.css",
				"assets/css/style.css",		
				"assets/css/trix.css",
                                "lib/colorpicker.css"]		

var jqueyanglib = jqueryLib.concat(angLib);
//Clean dist directory
gulp.task('clean-dist', function () {
  return gulp.src(['dist/**/*.js','dist/**/*.html',"dist/**/*.css"])
    .pipe(removeFiles());
});

/*
 * To merge and cached all angular templates
 */
gulp.task('templates', function () {
    return gulp.src('app/**/*.html')
            //.pipe(htmlmin())
            .pipe(angularTemplateCache('templates_'+htmlRandomStr+'.js', {
                module: 'adminapp',
                root: 'app/'
            }))
            .pipe(gulp.dest(destinationDir+'/app'));
});

//copy and move fonts
gulp.task('copyfonts', function() {
   gulp.src('assets/fonts/*.*')
   .pipe(gulp.dest(destinationDir+'/assets/fonts'));
});

// copy and move images
gulp.task('copyImages',function(){
	gulp.src('assets/img/**/*.*')
   .pipe(gulp.dest(destinationDir+'/assets/img'));
});

//Minify Css
gulp.task("mincss",function(){
return gulp.src(cssLib)
    .pipe(cleanCSS({compatibility: 'ie8',processImport:false,format: {breaks:{afterComment:true}}}))
    .pipe(concat('style_'+cssRandomStr+'.min.css'))
    .pipe(gulp.dest(destinationDir+'/assets/css'))
});

// Minify application js files
gulp.task('app', function() {
    return gulp.src(jqueyanglib.concat(appJsFiles))
	    .pipe(plumber())
			.pipe(concat('app.js'))
			.pipe(ngAnnotate({add: true}))
	    .pipe(plumber.stop())
        .pipe(gulp.dest(jsDest));
});

//Prod build generate
gulp.task('prod', ['app','templates','mincss','copyfonts','copyImages'], function() {
	return gulp.src(jsDest+'/app.js')
		.pipe(plumber())
			.pipe(bytediff.start())
				.pipe(uglify({mangle: true}))
			.pipe(bytediff.stop())
			.pipe(rename('app_'+jsRandomStr+'.min.js'))
		.pipe(plumber.stop())
		.pipe(gulp.dest(jsDest));

});
//Generate build and replace in html
gulp.task('build',['clean-dist','prod'],function(){
	gulp.src('index.html')
	.pipe(htmlreplace({
		'admin-css-files':'assets/css/style_'+cssRandomStr+'.min.css',
        'admin-app-files': 'app/app_'+jsRandomStr+'.min.js',
        'admin-template-files':'app/templates_'+htmlRandomStr+'.js'
    }))
    .pipe(gulp.dest(destinationDir));
});