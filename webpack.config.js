var TARGET = process.env.npm_lifecycle_event;

function buildConfig(env) {
  if(TARGET === 'start') {
    return require('./config/dev.js');
  }

  if(TARGET === 'build') {
    return require('./config/prod.js')
  }
}

module.exports = buildConfig();
