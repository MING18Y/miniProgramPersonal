// var gulp = require('gulp'),
//     less = require('gulp-less')

// gulp.task('default', ['compile-less'], function(){
//   console.log('gulping ......')
// })

// gulp.task('compile-less',function(){
//   console.log('compile-less')
//   gulp.src('pages/**/*.less')
//     .pipe(less())
//     .pipe(rename(function (path){
//       path.extname = ".wxss";
//     }))
//     .pipe(gulp.dest('pages'));
// });

const { series, src, dest } = require('gulp');
const gulpLess = require('gulp-less');
const rename = require('gulp-rename');

function complieLessToWxss(cb) {
  src('pages/**/*.less')
    .pipe(gulpLess())
    .pipe(rename(function (path){
      path.extname = ".wxss";
    }))
    .pipe(dest('pages'));

  cb();
}

exports.default = series(complieLessToWxss)
