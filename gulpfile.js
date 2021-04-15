'use strict';

const gulp = require('gulp');
const usemin = require('gulp-usemin');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');


// Tasks

function clean() {
    return del(['dist']);
}

function minify() {
    return gulp.src('./src/**/*.html')
            .pipe(usemin({
                css: [cleanCSS({ inline: ['remote'] })],
                js: [uglify()]
            }))
            .pipe(gulp.dest('./dist/'))
}

function images() {
    return gulp.src('./src/images/**/*.{jpg,jpeg,png,gif,svg}')
            .pipe(imagemin({
                optimizationLevel: 3,
                progressive: true,
                interlaced: true
            })).pipe(gulp.dest('./dist/images/'));
}

function boostrapFonts() {
    return gulp.src('bower_components/bootstrap/dist/fonts/**/*.{ttf,woff,eof,svg}*')
                    .pipe(gulp.dest('./dist/fonts/'));
}

function fontawesomeFonts() {
    return gulp.src('bower_components/font-awesome/webfonts/**/*.{ttf,woff,eof,svg}*')
            .pipe(gulp.dest('./dist/webfonts/'));
}

function docs() {
    return gulp.src('./src/docs/**/*')
            .pipe(gulp.dest('./dist/docs/'));
}

// Composed tasks
const fonts = gulp.parallel(boostrapFonts, fontawesomeFonts);
const build = gulp.parallel(minify, fonts, images, docs);

// Exports tasks
exports.clean = clean;
exports.build = build;
exports.default = gulp.series(clean, build);
