// required modules
var gulp = require('gulp'),
    exampleTasks = require('../gulp-tasks/example'),
    distTasks = require('../gulp-tasks/dist'),
    testTasks = require('../gulp-tasks/tests');

// local vars
var jsDistFile = 'ar-react-component-skeleton.js',
    sassMainFile = 'src/styles/ar-react-component-skeleton.scss';

/****************************************
 * General tasks                        *
 ****************************************/

gulp.task('default', ['build']);
gulp.task('build', ['build:example', 'build:dist']);
gulp.task('clean', ['clean:dist', 'clean:example']);
gulp.task('watch', ['watch:example', 'watch:dist']);

/****************************************
 * Examples tasks                       *
 ****************************************/

// connects the developer to the component example
gulp.task('dev', exampleTasks.dev());
gulp.task('clean:example', exampleTasks.clean);
gulp.task('build:example', exampleTasks.build());
gulp.task('watch:example', exampleTasks.watch());

/****************************************
 * Dist tasks                           *
 ****************************************/

gulp.task('build:dist', distTasks.build(jsDistFile, sassMainFile));
gulp.task('clean:dist', distTasks.clean);
gulp.task('watch:dist', distTasks.watch(jsDistFile, sassMainFile));

/****************************************
 * Test tasks                           *
 ****************************************/

gulp.task('test', testTasks.runJest);
