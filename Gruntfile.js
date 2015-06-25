module.exports = function(grunt, type) {
  grunt.initConfig({
    watch: {
      configFiles: {
        files: ['Gruntfile.js'],
        options: {
          reload: true
        }
      },
      sass: {
        files: "app/sass/*.sass",
        tasks: ['sass']
      },
      react: {
        files: ['app/**/*.jsx', 'app/**/*.js'],
        tasks: ['browserify']
      }
    },
    sass: {
      dev: {
        files: {
          "./dist/css/main.css" : "./app/sass/main.sass"
        }
      }
    },
    browserify: {
      options: {
        transform: [ ["babelify", { "stage": 0 }], require('grunt-react').browserify ]
      },
      client: {
        src: ['app/**/app.jsx'],
        dest: 'dist/js/app.js'
      }
    },
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "dist/css/*.css",
            "dist/*.html",
            "dist/js/*.js"
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: "./dist"
          }
        }
      }
    }
  });

  [
    'grunt-contrib-watch',
    'grunt-sass',
    'grunt-browser-sync',
    'grunt-browserify',
    'grunt-react'
  ].forEach(function (task) {
    grunt.loadNpmTasks(task);
  });

  grunt.registerTask('default', ['browserSync', 'watch']);
};