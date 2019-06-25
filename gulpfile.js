const { series, src, dest, watch, task, parallel  } = require('gulp');
const gulpLess = require('gulp-less');
const rename = require('gulp-rename');
const del = require('del');

function compileLessToWxss(glob) {
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

function lessWatchAndCompile(){
  watch('pages/**/*.less', (cb) => {
    compileLessToWxss('pages/**/*.less')
    cb()
    })
  watch('components/**/*.less', (cb) => {
    compileLessToWxss('components/**/*.less')
    cb()
  })
}

function development(cb) {
  //观察less文件改动，并编译
  process.env.NODE_ENV = 'development'
  lessWatchAndCompile()

  //Other tasks

  cb()
}

function production(cb) {
  //为生产环境， 预发环境删除less文件
  process.env.NODE_ENV = 'production'
  cleanLessForProducion()

  //Other tasks
  cb()
}

module.exports = {
  development,
  production,
} 
