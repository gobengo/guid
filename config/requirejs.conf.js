require.config({
  paths: {
    sinon: 'lib/sinonjs/sinon',
    chai: 'node_modules/chai/chai',
    debug: 'lib/debug/debug'
  },
  packages: [{
    name: 'guid',
    location: 'src'
  },{
    name: 'guid-tests',
    location: 'test'
  }],
  shim: {
    'sinon': {
      exports: 'sinon'
    }
  }
});
