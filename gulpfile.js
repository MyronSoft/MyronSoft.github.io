var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('default', function() {
    browserSync.init({
        watch: true,
        server: {
            baseDir: "./"
        }
    });


    gulp.watch("**/*").on("change", reload);
    
});