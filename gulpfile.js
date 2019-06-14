const { series, src, dest, watch, task, parallel  } = require('gulp');
const gulpLess = require('gulp-less');
const rename = require('gulp-rename');
const del = require('del');

function complieLessToWxss(glob) {
  let rootDir = glob.split('/')[0]
  src(glob)
    .pipe(gulpLess())
    .pipe(rename(function (path){
      path.extname = ".wxss";
    }))
    .pipe(dest(rootDir));
}

function cleanLessForProducion(){
  del([
    'pages/**/*.less',
    'components/**/*.less',
    // 不希望删掉文件，取反
    // '!xxx/**/*.xxx'
  ]);
}

function lessWatchAndComplie(){
  watch('pages/**/*.less', () => complieLessToWxss('pages/**/*.less'))
  watch('components/**/*.less', () => complieLessToWxss('components/**/*.less'))
}

function development(cb) {
  //观察less文件改动，并编译
  process.env.NODE_ENV = 'development'
  lessWatchAndComplie()

  //Other tasks

  cb()
}

function production(cb) {
  //为生产环境， 预发环境删除less文件
  process.env.NODE_ENV = 'production'
  cleanLessForProducion()
}

module.exports = {
  development,
  production,
} 
