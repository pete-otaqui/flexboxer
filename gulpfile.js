var gulp = require('gulp');
var gutil = require('gulp-util');
var spawn = require('child_process').spawn;

gulp.task('default', ['build']);

gulp.task('build', ['bundle', 'uglify', 'html-dist']);

gulp.task('watch', ['build'], function() {
  var watcher = gulp.watch('src/**/*.{js,jsx,html}', ['build']);
  watcher.on('change', function() {
    console.log('Building');
  });
});

gulp.task('html-dist', function() {
    var stdout = '', stderr = '';
    var child = spawn(
      "./node_modules/.bin/html-dist",
      ["src/index.html", "--remove-all", "--minify", "--insert", "build.min.js", "-o", "dist/index.html"],
      {cwd: process.cwd()}
    );
    child.stdout.setEncoding('utf8');
    child.stdout.on('data', function (data) {
        stdout += data;
        gutil.log(data);
    });

    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function (data) {
        stderr += data;
        gutil.log(gutil.colors.red(data));
        // gutil.beep();
    });
});

gulp.task('uglify', function() {
    var stdout = '', stderr = '';
    var child = spawn(
      "./node_modules/.bin/uglify",
      ["-s", "dist/build.js", "-o", "dist/build.min.js"],
      {cwd: process.cwd()}
    );
    child.stdout.setEncoding('utf8');
    child.stdout.on('data', function (data) {
        stdout += data;
        gutil.log(data);
    });

    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function (data) {
        stderr += data;
        gutil.log(gutil.colors.red(data));
        // gutil.beep();
    });
});

gulp.task('bundle', function() {
    var stdout = '', stderr = '';
    var child = spawn(
      "jspm",
      ["bundle-sfx", "lib/main.jsx!", "dist/build.js"],
      {cwd: process.cwd()}
    );
    child.stdout.setEncoding('utf8');
    child.stdout.on('data', function (data) {
        stdout += data;
        gutil.log(data);
    });

    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function (data) {
        stderr += data;
        gutil.log(gutil.colors.red(data));
        // gutil.beep();
    });

    // child.on('close', function(code) {
    //     gutil.log("Done with exit code", code);
    //     gutil.log("You access complete stdout and stderr from here"); // stdout, stderr
    // });
});
