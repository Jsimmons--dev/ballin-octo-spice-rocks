module.exports = function(grunt) {


  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: '<%= pkg.name %>.js',
        dest: '<%= pkg.name %>.min.js'
      }
    },
    forever : {
      server: {
       options: {
         index: './bin/www',
         logDir: 'logs'
       }
      }
    },
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css':'public/stylesheets/style.sass',
          'public/stylesheets/frame.css':'public/stylesheets/frame.sass'
        }
      }
    },
    watch: {
      scripts: {
        files: ['.'],
        tasks: ['default']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.loadNpmTasks('grunt-forever');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Default task(s).
  grunt.registerTask('default',['uglify','sass']);
  grunt.registerTask('r',['forever:server:restart']);
};
