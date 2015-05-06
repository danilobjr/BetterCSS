module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            sass: {
                files: ['styles/sass/**/*.{scss,sass}'],
                tasks: ['sass:dev']
            }
        },
        sass: {
            /*options: {
                sourceMap: true,
                outputStyle: 'compressed'
            },*/
            dev: {
                files: {
                    'styles/css/styles.css': 'styles/sass/main.sass'
                }
            }
        }
    });

    grunt.registerTask('default', ['sass:dev', 'watch']);

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
