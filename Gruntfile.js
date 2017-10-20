'use strict';
module.exports = function(grunt) {

	// load all grunt tasks matching the `grunt-*` pattern
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Watch for changes and trigger less, jshint, uglify and livereload
		watch: {
			options: {
				livereload: true
			},
			scripts: {
				files: [],
				tasks: ['jshint', 'uglify']
			},
			styles: {
				files: ['css/*.scss'],
				tasks: ['sass', 'postcss']
			}
		},

		sass: {
			// options: {
			// 	sourceMap: true
			// },
			dist: {
				files: {
				    'style.css': 'css/style.scss'
				}
			}
		},

		// PostCSS handles post-processing on CSS files. Used here to autoprefix and minify.
		postcss: {
			options: {
				map: {
					inline: false, // save all sourcemaps as separate files...
					annotation: '' // ...to the specified directory
				},
				processors: [
					require('postcss-flexbugs-fixes'),
					require('autoprefixer')({browsers: 'last 2 versions'}),
					require('cssnano')({ discardUnused: { fontFace: false }, zindex: false })
				]
			},
			dist: {
				src: '*.css'
			}
		},

		// JavaScript linting with jshint
		jshint: {
			all: [
				// 'public/js/src/*.js',
				// 'admin/js/src/*.js'
				]
		},

		// Uglify to concat, minify, and make source maps
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
						'<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			common: {
				files: {
					// 'public/js/report.min.js': ['public/js/src/common.js', 'public/js/src/report.js'],
					// 'public/js/map.min.js': ['public/js/src/common.js', 'public/js/src/map.js'],
					// 'public/js/map.walkscore.min.js': ['public/js/src/map.walkscore.js'],
					// 'public/js/widgets.min.js': ['public/js/src/common.js', 'public/js/src/widgets.js'],
					// 'admin/assets/js/public.min.js': ['admin/assets/js/src/*.js']
				}
			}
		},

		// Image optimization
		imagemin: {
			dist: {
				options: {
					optimizationLevel: 7,
					progressive: true,
					interlaced: true
				},
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'images/'
				}]
			}
		}

	});

	// Register tasks
	// Typical run, cleans up css and js, starts a watch task.
	grunt.registerTask('default', ['sass', 'postcss', 'jshint', 'uglify:common', 'watch']);

	// Before releasing a build, do above plus minimize all images.
	grunt.registerTask('build', ['sass', 'postcss',  'jshint', 'uglify:common', 'imagemin']);

};