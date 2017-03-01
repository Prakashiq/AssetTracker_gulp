var gulp = require('gulp');
var eslint = require('gulp-eslint');
var chalk = require('chalk');
var nodemon = require('gulp-nodemon');
var babel = require('gulp-babel');
var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify');  

var jsFiles =  ['*.js', 'src/**/*.js'];
var jsDest = 'dist';

gulp.task('scripts', function() {  
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('default', function () {
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest(jsDest));
});

gulp.task('lint', function() {
    return gulp.src(jsFiles)
    .pipe(eslint())
	.pipe(eslint.format())
	.pipe(eslint.failOnError());
});


gulp.task('inject',function(){
	var wiredep = require('wiredep').stream;
	var inject = require('gulp-inject');

	var injectSrc = gulp.src(['./public/css/*.css',
								'./public/js/*.js'], {read: false});

	var injectOptions = {
		ignorePath: '/public'
	};

	var options = {
		bowerJson: require('./bower.json'),
		directory: './public/lib',
		ignorePath: '../../public'
	};

	return gulp.src('src/views/*.ejs')
	.pipe(wiredep(options))
	.pipe(inject(injectSrc, injectOptions))
	.pipe(gulp.dest(jsDest+'/views'));
});


gulp.task('serve', ['lint','inject'], function(){
	var options = {
		script: './bin/www',
		delayTime: 1,
		env: {
			'PORT':3000
		},
		watch:jsFiles
	};

	return nodemon(options)
		.on('restart',function()
			{
				console.log(chalk.green('Restarting Services...'));
			})
		.on('crash', function()
			{
				console.error(chalk.red('Application has crashed!\n'));
			});
});