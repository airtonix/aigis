'use strict';

const gulp = require("gulp");
const aigis = require("gulp-aigis");
const sass = require("gulp-sass");
const plumber = require("gulp-plumber");
const bs = require("browser-sync");
const reload = bs.reload;

const src = {
  scss: "./src/css/app.scss"
};

gulp.task("watch", () => {
  gulp.watch(src.scss, ["scss"]);
});

gulp.task("scss", () =>{
  return gulp.src(src.scss)
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest("./css"));
});

gulp.task("aigis", () => {
  return gulp.src("./aigis_config.yml")
    .pipe(aigis());
});

gulp.task("serve", () => {
  bs.init({
    server: {
      baseDir: ["./docs"],
      directory: true
    },
    notify: false,
    host: "localhost"
  });
});

gulp.task("default", ["scss"]);