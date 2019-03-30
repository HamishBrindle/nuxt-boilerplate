const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.find(
    r => r.loader && r.loader.match('file-loader')
  ).exclude = /\.scss/;
  
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'sass-loader',
        options: {
          data: '@import "assets/styles/abstracts/variables";',
          javascriptEnabled: true
        }
      }
    ],
    include: path.resolve(__dirname, '../')
  });
  
  return config;
};