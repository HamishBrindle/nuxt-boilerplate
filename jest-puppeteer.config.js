const DEBUG_MODE = process.argv.includes('--debug');

module.exports = {
  launch: DEBUG_MODE ? {
    dumpio: true,
    headless: false,
    slowMo: 100,
  } : {},
  browserContext: 'default',
};
