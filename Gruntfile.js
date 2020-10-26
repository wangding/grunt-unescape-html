module.exports = function (grunt) {
  grunt.initConfig({
    clean: {
      tests: ['tmp', 'test/dst/*.html']
    },

    // Configuration to be run (and then tested).
    unescape: {
      files: {
        src:  'test/src/*.html',
        dist: 'test/dst/'
      }
    },

    // Unit tests
    mochacli: {
      options: {
        reporter: 'spec',
        bail: true
      },
      all: ['test/*.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-mocha-cli');

  grunt.registerTask('test', ['clean', 'unescape', 'mochacli']);
};
