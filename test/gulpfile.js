const gulp = require("gulp");
const uglify = require("gulp-uglify");
gulp.task(function(){
    gulp.src("../") /*引入的需要对其执行操作的文件*/
        .pipe(gulp()); /*对其执行的操作*/
});