var path = require('path');
var webpack = require('webpack');
var base = require('./webpack.config');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

base.mode = 'development';
// base.devtool = 'cheap-module-eval-source-map';
Object.keys(base.entry).forEach(function (name) {
    base.entry[name] = ['webpack-hot-middleware/client?reload=true'].concat(base.entry[name]);
});
base.optimization = {
    runtimeChunk: {
        name: "manifest"
    },
    splitChunks: {
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: "vendor",
                chunks: "all"
            }
        }
    }
};
base.plugins.push(
    new webpack.DefinePlugin({
        'process.env': {
            MOCK: !!process.env.MOCK,
            CODE_ENV: JSON.stringify(process.env.CODE_ENV),
            REACT_ENV: JSON.stringify('client')
        }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
        filename: 'static/css/[name].css'
    })
);

module.exports = base;
