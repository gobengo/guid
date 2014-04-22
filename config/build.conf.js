({
  mainConfigFile: 'requirejs.conf.js',
  paths: {
    almond: 'lib/almond/almond'
  },
  baseUrl: '.',
  name: 'guid',
  include: ['almond'],
  out: 'dist/guid.min.js',
  preserveLicenseComments: false,
  optimize: 'uglify2',
  cjsTranslate: true,
  uglify2: {
    compress: {
      unsafe: true
    },
    mangle: true
  },
  wrap: {
    startFile: 'tools/wrap-start.frag',
    endFile: 'tools/wrap-end.frag'
  },
  generateSourceMaps: true
})
