module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    grunt.loadNpmTasks('grunt-react');


    grunt.initConfig({
        react: {
            single_file_output: {
                files: {
                    'app.js': 'app.jsx'
                }
            },

            dynamic_mappings: {
                files: [
                    {
                        expand: true,
                        cwd: '',
                        src: ['**/*.jsx'],
                        dest: '',
                        ext: '.js'
        }
      ]
            }
        },
    })

    // task setup
    grunt.registerTask('default', ['react']);
};
