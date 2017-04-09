
var gulp = require("gulp")
var postcss = require("gulp-postcss")
var partialImport = require("postcss-partial-import")
var cssnext = require("postcss-cssnext")

var styleVariables = require("./src/styleVariables")
var mediaQueries = require("./src/mediaQueries")

gulp.task("css:build", function() {
    var processors = [
        partialImport(),
        cssnext({
            browsers: ["> 1%"],
            features: {
              customProperties: {
                variables: styleVariables,
              },
              customMedia: {
                extensions: mediaQueries,
              }
            }
        })
    ]
    return gulp.src("./src/main.css")
               .pipe(postcss(processors))
               .pipe(gulp.dest("./css"))
})

gulp.task("default", function() {
    gulp.watch("./src/**/*.css", ["css:build"])
})
