// libs
const path = require('path');

// vars
const APP_DIR = path.resolve(__dirname, './src');
const BUILD_DIR = path.resolve(__dirname, './dist');

// config
module.exports = {
    entry: path.resolve(APP_DIR, './lib.js'),
    output: {
        path: BUILD_DIR,
        filename: 'canvas-steg.js',
        library: 'CanvasSteg',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    }
};
