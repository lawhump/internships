var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var server = require('gulp-webserver');


// Concatenate and compile SCSS
gulp.task('sass', function() {
  return gulp.src('app/scss/app.scss')
    .pipe($.sass({
        includePaths: sassPaths
      })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(cssnano())
    .pipe(rename('all.min.css'))
    .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(['app/js/**/*.js', '!dev/js/vendor/**'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['sass', 'scripts'], function() {
  gulp.watch(['app/scss/*.scss'], ['sass']);
  gulp.watch('app/js/*.js', ['scripts']);
});

gulp.task('build', ['sass', 'scripts']);
