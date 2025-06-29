const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))

function buildStyles() {
    return src('my_scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask() {
    watch(['my_scss/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)