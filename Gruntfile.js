// Generated on 2013-11-08 using generator-angular 0.5.1
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.loadNpmTasks('grunt-html-snapshot'); // added by PAJ 1/3/2014

  grunt.initConfig({
    yeoman: {
      // configurable paths
      app: require('./bower.json').appPath || 'app',
      dist: 'dist'
    },
    watch: {
      coffee: {
        files: ['<%= yeoman.app %>/scripts/{,*/}*.coffee'],
        tasks: ['coffee:dist']
      },
      coffeeTest: {
        files: ['test/spec/{,*/}*.coffee'],
        tasks: ['coffee:test']
      },
      compass: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer']
      },
      styles: {
        files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
        tasks: ['copy:styles', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    autoprefixer: {
      options: ['last 1 version'],
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= yeoman.dist %>'
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js'
      ]
    },
    coffee: {
      options: {
        sourceMap: true,
        sourceRoot: ''
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/scripts',
          src: '{,*/}*.coffee',
          dest: '.tmp/scripts',
          ext: '.js'
        }]
      },
      test: {
        files: [{
          expand: true,
          cwd: 'test/spec',
          src: '{,*/}*.coffee',
          dest: '.tmp/spec',
          ext: '.js'
        }]
      }
    },
    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/styles',
        cssDir: '.tmp/styles',
        generatedImagesDir: '.tmp/images/generated',
        imagesDir: '<%= yeoman.app %>/images',
        javascriptsDir: '<%= yeoman.app %>/scripts',
        fontsDir: '<%= yeoman.app %>/styles/fonts',
        importPath: '<%= yeoman.app %>/bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false
      },
      dist: {},
      server: {
        options: {
          debugInfo: true
        }
      }
    },
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
      dist: {}
    },*/
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
            '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= yeoman.dist %>/styles/fonts/*'
          ]
        }
      }
    },
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        dirs: ['<%= yeoman.dist %>']
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    cssmin: {
      // By default, your `index.html` <!-- Usemin Block --> will take care of
      // minification. This option is pre-configured if you do not wish to use
      // Usemin blocks.
      // dist: {
      //   files: {
      //     '<%= yeoman.dist %>/styles/main.css': [
      //       '.tmp/styles/{,*/}*.css',
      //       '<%= yeoman.app %>/styles/{,*/}*.css'
      //     ]
      //   }
      // }
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>',
          src: ['*.html', 'views/*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Put files not handled in other tasks here
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'bower_components/**/*',
            'images/{,*/}*.{gif,webp}',
            'styles/fonts/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: [
            'generated/*'
          ]
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },
    concurrent: {
      server: [
        'coffee:dist',
        'compass:server',
        'copy:styles'
      ],
      test: [
        'coffee',
        'compass',
        'copy:styles'
      ],
      dist: [
        'coffee',
        'compass:dist',
        'copy:styles',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    cdnify: {
      dist: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/scripts',
          src: '*.js',
          dest: '<%= yeoman.dist %>/scripts'
        }]
      }
    },
    uglify: {
      dist: {
        files: {
          '<%= yeoman.dist %>/scripts/scripts.js': [
            '<%= yeoman.dist %>/scripts/scripts.js'
          ]
        }
      }
    },
    // htmlSnapshot added 01/03/2014 by PAJ
    htmlSnapshot: {
      all: {
        options: {
          snapshotPath: 'snapshots/',
          fileNamePrefix: '',
          sitePath: 'http://127.0.0.1:9000/',
          removeScripts: true,
          replaceStrings:[
/*            {'ng-': 'ngx-'},
            {'row-fluid': 'xrow-fluid'},
            {'<meta name="fragment" content="!">': ''},
*/            {'ng-app="iartxApp" ng-controller="TitleCrtl" ': ''},
            {' ng-bind="Page.title\\(\\)"': ''},
            {"'views/header.html'": 'views/header.html'},
            {'<!-- ngInclude: views/header.html -->': ''},
            {' ng-include="views/header.html"': '',},
            {' ng-controller="HeaderController"': ''},
            {"'views/artist-index.html'": 'views/artist-index.html'},
            {'<!-- ngInclude: views/artist-index.html -->': ''},
            {' ng-include="views/artist-index.html"': ''},
            {' ng-controller="ArtistListCtrl"': ''},

            {"'avail'": 'x'},
            {"'sold'": 'x'},
            {"'other'": 'x'},
            {'<!-- ngRepeat: artist in data.artists \\| filter:{cat: x} -->': ''},
            {' ng-repeat="artist in data.artists \\| filter:{cat: x}"': ''},
            {'<!-- end ngRepeat: artist in data.artists \\| filter:{cat: x} -->': ''},

            {'<!-- ngRepeat: paragraph in data.artist.bio -->': ''},
            {' ng-repeat="paragraph in data.artist.bio"': ''},
            {' ng-bind-html="paragraph"': ''},
            {'<!-- end ngRepeat: paragraph in data.artist.bio -->': ''},

            {'<!-- ngIf: data.artist.bio_credit_name.length > 0 -->': ''},
            {' ng-if="data.artist.bio_credit_name.length &gt; 0"': ''},
            {'<!-- end ngIf: data.artist.bio_credit_name.length > 0 -->': ''},

            {' ng-pristine ng-valid': ''},
            {' ng-show="artwork.images.length &gt; 1"': ''},
            {'<!-- ngRepeat: img in artwork.images -->': ''},
            {' ng-repeat="img in artwork.images"': ''},
            {' ng-click="setImage\\(img\\)"': ''},
            {'<!-- end ngRepeat: img in artwork.images -->': ''},
            {"'\\$'": 'X'}, 
            {'ng-if="artwork.price.charAt(0) == X"': ''},
            {'<!-- ngIf: artwork.price.charAt(0) == X -->': ''},
            {"<!-- ngIf: artwork.seller_id == 'rk' -->": ''},
            {'<!-- ngIf: !artwork.seller_id -->': ''},
            {' ng-if="!artwork.seller_id"': ''},
            {'!-- end ngIf: !artwork.seller_id -->': ''},

            {'<!-- ngRepeat: paragraph in artwork.description -->': ''},
            {' ng-repeat="paragraph in artwork.description"': ''},
            {'<!-- end ngRepeat: paragraph in artwork.description -->': ''},

            {'<!-- ngRepeat: artwork in data.artist.artworks -->': ''},
            {' ng-repeat="artwork in data.artist.artworks"': ''},
            {'<!-- end ngRepeat: artwork in data.artist.artworks -->': ''},

            {'<!-- ngIf: data.artist.publications.length > 0 -->': ''},
            {'ng-if="data.artist.publications.length &gt; 0"': ''},
            {'<!-- ngRepeat: pub in data.artist.publications -->': ''},
            {' ng-repeat="pub in data.artist.publications"': ''},
            {'<!-- end ngRepeat: pub in data.artist.publications -->': ''},
            {'<!-- ngIf: pub.publisher.length > 0 -->': ''},
            {'<!-- end ngIf: data.artist.publications.length > 0 -->': ''},

            {'<!-- ngIf: pub.pub_date.length > 0 -->': ''},
            {' ng-if="pub.pub_date.length &gt; 0"': ''},
            {'<!-- end ngIf: pub.pub_date.length > 0 -->': ''},

            {'<!-- ngIf: data.artist.links.length > 0 -->': ''},
            {'<!-- ngRepeat: link in data.artist.links -->': ''},
            {' ng-repeat="link in data.artist.links"': ''},
            {' ng-controller="ArtworkDetailCtrl" ng-model="artwork"': ''},

            {' class="ng-scope ng-binding"': ''},
            {' class="ng-binding"': ''},
            {' class="ng-scope"': ''},
            {' class=""': ''},

            {'<!-- end ngIf: data.artist.links.length > 0 -->': '',},
            {'<!-- end ngRepeat: link in data.artist.links -->': ''},
            {'<!-- build:js scripts/plugins.js -->': ''},
            {'<!-- build:js scripts/modules.js -->': ''},
            {'<!-- livereload script -->': ''},
            {'<!-- endbuild -->': ''},
            {'<!-- build:js\\(\\{.tmp,app\\}\\) scripts\\/scripts.js -->': ''},
            {' ng-binding': ''},
            {' ng-scope': ''}
          ],
          urls: [
            '#!/index',
/*            '#!/booklist',
            '#!/sources',
*/            '#!/notes',
            '#!/about',
            '#!/contact',
            '#!/artists/aladin-agathe',
            '#!/artists/aladin-theard',
            '#!/artists/alphonse-fritzner',
            '#!/artists/auguste-toussaint',
            '#!/artists/benjamin-john',
            '#!/artists/bottex-s-e',
            '#!/artists/casimir-laurent',
            '#!/artists/cato-elinus',
            '#!/artists/desrosiers-m',
            '#!/artists/dodson-ann',
            '#!/artists/domond-ezene',
            '#!/artists/domond-wilmino',
            '#!/artists/dreux-nicolas',
            '#!/artists/dupoux-raoul',
            '#!/artists/etienne-gregoire',
            '#!/artists/francois-roger',
            '#!/artists/guillaume-jean-jacques',
            '#!/artists/hector-voltaire',
            '#!/artists/ismael-saincilus',
            '#!/artists/jacques-harry',
            '#!/artists/jean-jean-baptiste',
            '#!/artists/jean-marie-carmel',
            '#!/artists/jean-ulrick',
            '#!/artists/jean-jacques-carlo',
            '#!/artists/jose-hilome',
            '#!/artists/joseph-reynald',
            '#!/artists/kuhlman-walter',
            '#!/artists/louis-wilfrid',
            '#!/artists/louissaint-jacques',
            '#!/artists/louizor-ernst',
            '#!/artists/maurice-a-m',
            '#!/artists/obin-fritzner',
            '#!/artists/obin-othon',
            '#!/artists/pierre-andre',
            '#!/artists/pierre-eddy',
            '#!/artists/profil-jonas',
            '#!/artists/rameau-cameau',
            '#!/artists/robuste-jean-claude',
            '#!/artists/rodriguez-maria-dolores',
            '#!/artists/st-fleur-michelle',
            '#!/artists/valcin-pierre-joseph',
            '#!/artists/valery-julien',
            '#!/artists/zephirin-frantz'
          ]
        }
      }
    }
  });

  grunt.registerTask('server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'copy:dist',
    'cdnify',
    'ngmin',
    'cssmin',
    'uglify',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};
