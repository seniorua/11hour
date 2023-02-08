const { src, dest, watch} = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const concat = require('gulp-concat');

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

function scssTocss() {
  return src('src/scss/style.scss')
    .pipe(scss({outputStyle: "compressed"}))
    .pipe(concat('style.min.css'))
    .pipe(dest('dist/css'))
}

function scssTocss1() {
  return src('src/scss/style.scss')
    .pipe(scss())
    .pipe(dest('src/css'))
}

function watching(){
  watch(['src/scss/*.scss'], scssTocss);
  watch(['src/scss/*.scss'], scssTocss1);
}
  
exports.default = defaultTask;
exports.tocss = scssTocss;
exports.tocss1 = scssTocss1;
exports.watching = watching;