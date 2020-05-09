var gulp = require('gulp');
var sass = require('gulp-sass');
var browser = require('browser-sync').create();


gulp.task('browserSync',function (){
    browser.init({
        server:{
            baseDir: 'src'
    },
    })
});


 // sass
gulp.task('sass',function(){
    return gulp.src('./sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./src/css'))
    .pipe(browser.reload({
        stream: true
    })); 
});

gulp.task('watch',function(){
    gulp.watch('sass/*.sass',gulp.series('sass'));

});


gulp.task('default',gulp.series('sass','watch'));
