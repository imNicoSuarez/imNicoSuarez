var path = require('path');

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // sass: {
    //     dist: {
    //         options: {
    //             outputStyle: 'nested',
    //             includePaths: ['bower_components/fontawesome/scss']
    //         },
    //         files: {
    //             'assets/stylesheets/css/application.css': 'assets/stylesheets/sass/application.sass'
    //         }
    //     }
    // },
    watch: {
        css: {
            files: ['**/*.css'],
            tasks: ['concat', 'cssmin']
        },
        js: {
            files: ['**/*.js'],
            tasks: ['concat', 'uglify', 'jshint']
        }
    },
    jshint: {
        all: {
            src: 'public/js/main.js'
        }
    },
    concat: {
        js: {
            src: ['bower_components/jquery/dist/jquery.js',
                  'assets/javascripts/welcome-title.js'],
            dest: 'public/dist/main.js'
        },
        css: {
            src: [ 'assets/stylesheets/css/*.css' ,
                   'bower_components/animate.css/animate.css'],
            dest: 'public/dist/main.css'
        }
    },
    uglify: {
        dist: {
            src: 'public/dist/main.js',
            dest: 'public/dist/main.min.js'
        }
    },
    cssmin: {
        css: {
            src: 'public/dist/main.css',
            dest: 'public/dist/main.min.css'
        }
    },
    concurrent: {
        default: ['watch', 'jshint'],
        options: {
            logConcurrentOutput: true,
            limit: 4
        }
    }
  });

  grunt.registerTask('default', ['concat', 'uglify',
                                 'cssmin', 'concurrent:default'])
  grunt.registerTask('precompile', ['concat', 'uglify', 'cssmin'])

}