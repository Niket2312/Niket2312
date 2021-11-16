const { resolve } = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'prod.js',
        path: resolve(__dirname,'dist')

    },
    mode: 'developement'
}