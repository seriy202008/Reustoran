import gulp from 'gulp';

// Конфигурация
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';

// Глобальная переменная APP
global.app = {
    build: process.argv.includes('--build'),
    dev: !process.argv.includes('--build'),
    gulp: gulp,
    path: path,
    plugins: plugins,
}

// Импорт задач
import { reset } from './gulp/tasks/reset.js';
import { server } from './gulp/tasks/server.js';
import { pug } from './gulp/tasks/pug.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { img } from './gulp/tasks/img.js';
import { OTFtoTTF, TTFtoWOFF, fonstStyle } from './gulp/tasks/font.js';
import { zip } from './gulp/tasks/zip.js';

// Наблюдатель
function watcher() {
    gulp.watch(app.path.watch.pug, pug);
    gulp.watch(app.path.watch.scss, scss);
    gulp.watch(app.path.watch.js, js);
    gulp.watch(app.path.watch.img, img);
}

// Создание сценариев
const font = gulp.series(OTFtoTTF, TTFtoWOFF, fonstStyle);
const mainTasks = gulp.series(font, gulp.parallel(pug, scss, js, img));

const dev = gulp.series(
    reset,
    mainTasks,
    gulp.parallel(watcher, server)
)
const build = gulp.series(
    reset,
    mainTasks
)
const deployZIP = gulp.series(
    reset,
    mainTasks,
    zip
)

// Выполнение сценариев
gulp.task('default', dev);
gulp.task('build', build);
gulp.task('deployZIP', deployZIP);

// Экспорт сценариев
export { dev };
export { build };
export { deployZIP };