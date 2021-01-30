var gulp = require('gulp');
var sass = require('gulp-sass');

var allScss = './scss/**/*.scss';
var destination = './dist/css'; 

function style () {
    return gulp.src(allScss)
    .pipe(sass())
    .pipe(gulp.dest(destination))
};

function watch() {
    gulp.watch(allScss,style)
};

exports.style = style;
exports.watch = watch;

