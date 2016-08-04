/* global __dirname, process, require, module */

const path = require('path');
const fs = require('fs');
const glob = require('glob');

const webpack = require("webpack");

const ENV_DEV = 'dev';
const ENV_PROD = 'prod';
const INDEX_HTML = 'index.html';
const PATH_DIST = 'dist';
const PATH_SRC = 'src';
const BUNDLE = 'bundle.js';
const BUNDLE_HASH = 'bundle.[hash].js';

const ENV = process.env.ENV || ENV_PROD;

function copyIndexAndUpdateHashBundleInProd() {
  this.plugin('done', function(stats) {
    if ( !stats.compilation.errors.length ) {
      const SCRIPT_MATCH = `<script([^>]+)src="${BUNDLE}"([^>]*)>`;
      const FINAL_PATH = path.join(__dirname, PATH_DIST, INDEX_HTML);
      // get src/index.html, replace script tag src
      let html = fs
        .readFileSync(path.join(PATH_SRC, INDEX_HTML))
        .toString()
        .replace(
          new RegExp(SCRIPT_MATCH, 'i'),
          `<script$1src="bundle.${stats.hash}.js"$2>`
        );
      // write dist/index.html file
      fs.writeFileSync(FINAL_PATH, html);
      // clear out old bundle files
      glob.sync(`${PATH_DIST}/*.js`)
        .filter((file) => {
          return !file.match(stats.hash);
        })
        .forEach(fs.unlinkSync);
    }
  });
}


let webpackPlugins = [];
let babelQueryPresets = ['es2015', 'react'];
let outputPath = PATH_DIST;
let bundleName = BUNDLE_HASH;

if ( ENV === ENV_DEV ) {
  babelQueryPresets.push('react-hmre');
  outputPath = PATH_SRC;
  bundleName = BUNDLE;
} else {
  webpackPlugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: true,
      compress: {warnings: false}
    }),
    copyIndexAndUpdateHashBundleInProd
  );
}

module.exports = {
  entry: `./${PATH_SRC}/js/main.js`,
  output: {
    path: path.resolve(__dirname, outputPath),
    filename: bundleName
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: __dirname,
        loader: 'babel',
        query: {
          presets: babelQueryPresets
        }
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: 'style!css!less'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json'
      }
    ]
  },
  plugins: webpackPlugins
};
