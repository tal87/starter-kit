const gulp = require("gulp");

const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const webpack = require("webpack-stream");
const webpackConf = require("./webpack.config");

browserSync.init({
  proxy: "localhost:5000",
  notify: true,
  open: false
});

gulp.task("sass", () => {
  return gulp
    .src("./src/sass/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./public/css"))
    .pipe(browserSync.stream());
});

gulp.task("webpack", () => {
  return gulp
    .src("./src/js/**/*.js")
    .pipe(webpack(webpackConf))
    .pipe(gulp.dest("./public/js"))
    .pipe(browserSync.stream());
});

gulp.task("serve", () => {
  gulp.watch("./src/sass/**/*.scss", gulp.series("sass"));
  gulp.watch("src/js/**/*.js", gulp.series("webpack"));
  gulp.watch("public/*").on("change", browserSync.reload);
});

gulp.task("default", gulp.series("sass", "webpack", "serve"));
