// Имя папки проекта
import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
    src: {
        pug: [`${srcFolder}/pug/*.pug`, `!${srcFolder}/pug/_*.pug`],
        scss: [`${srcFolder}/scss/*.scss`, `!${srcFolder}/scss/_*.scss`],
        js: `${srcFolder}/js/script.js`,
        img: {
            min: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif}`,
            nomin: `${srcFolder}/img/**/*.{ico,webp,svg}`,
        },
    },
    build: {
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        js: `${buildFolder}/js/`,
        img: `${buildFolder}/img/`,
        font: `${buildFolder}/fonts/`,
    },
    watch: {
        pug: `${srcFolder}/pug/**/*.pug`,
        scss: `${srcFolder}/scss/**/*.scss`,
        js: `${srcFolder}/js/**/*.js`,
        img: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,svg,ico,webp}`,
        font: `${buildFolder}/fonts/**/*.{otf,ttf,woff,woff2}`,
    },
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}