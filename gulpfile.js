const gulp = require('gulp');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const webpackStream = require('webpack-stream');
const autoprefixer = require('autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const postcss = require('gulp-postcss')
const terser = require("gulp-terser");
var rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
var buffer = require('vinyl-buffer');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');
var spritesmith = require('gulp.spritesmith');


gulp.task('js', () =>
    gulp.src('src/js/*.js')
        .pipe(babel({
            presets: [
            ['@babel/preset-env',
	            {  
			        "useBuiltIns": "entry",
			        "corejs": 3,
	            	"targets": {
			          "ie": "11",
	        		}
	            }
            ]],
            "plugins": ["@babel/plugin-transform-object-assign"],
        }))
        .pipe(gulp.dest('dist'))
);


gulp.task('js-min', () =>
    gulp.src('src/js/*.js')
        .pipe(terser())
        .pipe(rename(function (path) {
          // Updates the object in-place
          path.extname = ".min.js";
        }))
        .pipe(gulp.dest('dist'))
);


gulp.task('bundle', () => 
  gulp.src(`./src/bundle/script_tooltips.js`)
    .pipe(plumber())
    .pipe(webpackStream({
      mode: 'development',
      entry: {'bundle': './src/bundle/script_tooltips.js'},
      output: {
        filename: '[name].js',
      },
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      // externals: {
      //   jquery: 'jQuery'
      // }
    }))
    .pipe(gulp.dest('dist'))
);


gulp.task('css', () => {
  var files = ['./css/screen.css']
  //, './css/screen_media.css', 'csscritical.css'];


  var tasks = files.map(function(file) {
    return gulp.src(file)
      .pipe(sourcemaps.init())
      .pipe(postcss([ autoprefixer({grid: 'autoplace'}) ]))
      .pipe(cleanCSS())
      .pipe(rename(function (path) {
        path.extname = ".min.css";
      }))
      // .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./css'))
  })

  return merge(tasks);
})


gulp.task('sprite', function () {
  // Generate our spritesheet
  var spriteData = gulp.src('images/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css',
    cssTemplate: 'handlebarsStr.css.handlebars',
    algorithm: 'diagonal'
    // cssVarMap: function (sprite) {
    //   console.log(sprite);
    //   sprite.name = sprite.name;
    // }
  }));
  // Pipe image stream through image optimizer and onto disk
  var imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images/sprite/'));
 
  // Pipe CSS stream through CSS optimizer and onto disk
  var cssStream = spriteData.css
    .pipe(gulp.dest('dist/images/sprite/'));
 
  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream);

});


var criticalCss = require('gulp-penthouse');

//Выходной файл - csscritical.css в корне
gulp.task('critical', function () {
    return gulp.src('./css/all_styles.css')
        .pipe(criticalCss({
            out: 'critical.css',
            url: 'http://maiiasol.ru/arm/index.html',
            width: 1300,
            height: 900,
            strict: true,
            userAgent: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
        }))
        .pipe(gulp.dest('css/'));
});


// gulp.task('css', () => {

//   return gulp.src('./css/screen.css')
//     // .pipe(sourcemaps.init())
//     // .pipe(postcss([ autoprefixer({grid: 'autoplace'}) ]))
//     .pipe(cleanCSS())
//     .pipe(rename(function (path) {
//       path.extname = ".min.css";
//     }))
//     // .pipe(sourcemaps.write('.'))
//     .pipe(gulp.dest('css/'))
// })
