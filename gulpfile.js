var gulp = require('gulp');

var server = require('gulp-webserver');

// 读取文件

var path = require('path');
var fs = require('fs');
var url = require('url');

// 获取json数据
var data = require('./data/data.json');

gulp.task('server', function() {
    gulp.src('src')
        .pipe(server({
            port: 9090,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                var pathname = url.parse(req.url).pathname;

                if (pathname === '/favicon.ico') {
                    return;
                }

                pathname = pathname === '/' ? '/index.html' : pathname;
                if (pathname === '/api/list') {
                    res.end(JSON.stringify(data))
                } else {
                    res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)));
                }

            }
        }))
})