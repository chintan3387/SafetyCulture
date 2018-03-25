const path = require('path');

const BASE_PATH = path.join(__dirname, '/..');

const pathConfig = {
  base: BASE_PATH,
  src: `${BASE_PATH}/src`,
  public: '/',
  dist: `${BASE_PATH}/dist`,
  webpack: __dirname,
};

module.exports = pathConfig;
