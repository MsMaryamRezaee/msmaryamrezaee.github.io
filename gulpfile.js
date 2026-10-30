// Workaround for Node.js 20+ / 22+ Happy Eyeballs (autoSelectFamily) causing
// AggregateError when portscanner probes localhost
var net = require('net');
if (net.setDefaultAutoSelectFamily) {
  net.setDefaultAutoSelectFamily(false);
}

try {
  var portscanner = require('portscanner');
  var origFind = portscanner.findAPortNotInUse;
  portscanner.findAPortNotInUse = function(port) {
    var args = Array.prototype.slice.call(arguments);
    var cb = args[args.length - 1];
    if (typeof cb === 'function') {
      args[args.length - 1] = function(err, freePort) {
        if (err && (err.name === 'AggregateError' || (err.errors && err.errors.length))) {
          return cb(null, port);
        }
        cb(err, freePort);
      };
    }
    return origFind.apply(this, args);
  };
} catch (e) {
  // portscanner not found or already patched
}

var gulp = require('gulp');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass')(require('sass'));
var plumber = require('gulp-plumber');
var cp = require('child_process');
var browserSync = require('browser-sync');

// Use Bundler to run the local Jekyll environment
var jekyllCommand = 'bundle';
var jekyllArgs = ['exec', 'jekyll', 'build'];

/*
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
	return cp.spawn(jekyllCommand, jekyllArgs, {stdio: 'inherit', shell: true})
		.on('close', done);
});

/*
 * Rebuild Jekyll & reload browserSync
 */
gulp.task('jekyll-rebuild', gulp.series(['jekyll-build'], function (done) {
	browserSync.reload();
	done();
}));

/*
 * Build the jekyll site and launch browser-sync
 */
gulp.task('browser-sync', gulp.series(['jekyll-build'], function(done) {
    browserSync.init({
        server: {
            baseDir: '_site',
            serveStaticOptions: {
                extensions: ['html']
            }
        },
        listen: '127.0.0.1'
    }, done)
}));

/*
* Compile and minify sass
*/
gulp.task('sass', function() {
  return gulp.src('src/styles/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(concat('main.css'))
    .pipe(csso())
    .pipe(gulp.dest('assets/css/'))
});

/**
 * Compile and minify js
 */
gulp.task('js', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(plumber())
		.pipe(concat('main.js'))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js/'))
});

/*
* Watch task - Removed missing image/font folders
*/
gulp.task('watch', function() {
  gulp.watch('src/styles/**/*.scss', gulp.series(['sass', 'jekyll-rebuild']));
  gulp.watch('src/js/**/*.js', gulp.series(['js', 'jekyll-rebuild']));
  gulp.watch(['*.html', '*.md', '_includes/**/*.html', '_layouts/**/*.html'], gulp.series(['jekyll-rebuild']));
});

/*
* Default task sequence: build assets, then build Jekyll, then serve and watch
*/
gulp.task('default', gulp.series(['js', 'sass', 'browser-sync', 'watch']));

/*
* Build task sequence (without serving/watching)
*/
gulp.task('build', gulp.series(['js', 'sass', 'jekyll-build']));