const wbepack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/server.js',
    target: 'node',
    output: {
        path: path.join(__dirname, '../build'),
        filename: 'index.js'
    }
}
