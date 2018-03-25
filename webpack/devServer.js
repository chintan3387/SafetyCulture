const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.config.js');

const PORT = 3000;
const server = express();

const pathConfig = require('./pathConfig');

const compiler = webpack(webpackConfig);
const middleware = webpackDevMiddleware(compiler, {
  path: webpackConfig.output.path,
  publicPath: webpackConfig.output.publicPath,
  hot: true,
  contentBase: pathConfig.src,
});

const distFile = `${pathConfig.dist}/index.html`;

server.use(middleware);
server.use(webpackHotMiddleware(compiler));

server.get('*', (req, res) => {
  res.write(middleware.fileSystem.readFileSync(distFile));
  res.end();
});

server.listen(PORT, 'localhost', err =>  {
  if (err) {
    console.info(err);
  }

  console.info(`Listening for request at: http://localhost:${PORT}`);
});
