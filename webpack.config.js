const TARGET = process.env.npm_lifecycle_event;

function buildConfig() {
  if (TARGET === 'start') {
    return require('./config/dev.js');
  }

  if (TARGET === 'build') {
    return require('./config/prod.js');
  }
}

module.exports = buildConfig();
