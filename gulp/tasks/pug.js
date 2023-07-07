import pugCompiler from 'gulp-pug'; 
import versionNumber from 'gulp-version-number'; 
import htmlmin from 'gulp-htmlmin'; 

export const pug = () => {
    return app.gulp.src(app.path.src.pug)
        .pipe(app.plugins.plumber(app.plugins.notify.onError(
            { title: `PUG`, message: `Error: <%= error.message %>` }
        )))
        .pipe(pugCompiler({ pretty: '\t' }))
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(app.plugins.if(
            app.build,
            versionNumber({
                'value': '%DT%',
                'append': { 'key': '_v', 'cover': 0, 'to': ['css', 'js',] },
                'output': { 'file': 'gulp/version.json' }
            })
        ))
        .pipe(app.plugins.if(
            app.build,
            htmlmin({collapseWhitespace: true})
        ))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.stream());
}