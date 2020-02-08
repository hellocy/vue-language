'use strict'
const path = require('path')
const ip = require('ip')
module.exports = {
    dev: {
        // Paths
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/proxy': {
                target: 'http://10.29.6.96:8088/', //宾灯服务器接口地址
                // target: 'http://10.35.4.114:8088/', //徐旭彬服务器接口地址
                // target: 'http://10.29.6.68:8088/', //王标服务器接口地址
                // target: 'http://10.35.4.148:8899/', //陈毅服务器接口地址
                // target: 'http://plm.hqygou.com:8088', //测试机服务器接口地址-1
                // target: 'http://plm.hqygou.com:8188', //测试机服务器接口地址-2
                // target: 'http://api-plm.gw-ec.com/', //正式服务器接口地址
                changeOrigin: true,
                pathRewrite: {
                    '^/proxy': ''
                }
            }
        },

        // Various Dev Server settings
        host: ip.address(), // can be overwritten by process.env.HOST
        port: 9528, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
        autoOpenBrowser: true,
        errorOverlay: true,
        notifyOnErrors: false,
        poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

        // Use Eslint Loader?
        // If true, your code will be linted during bundling and
        // linting errors and warnings will be shown in the console.
        useEslint: true,
        // If true, eslint errors and warnings will also be shown in the error overlay
        // in the browser.
        showEslintErrorsInOverlay: false,

        /**
         * Source Maps
         */

        // https://webpack.js.org/configuration/devtool/#development
        // devtool: 'cheap-source-map',
        devtool: '#source-map',

        // If you have problems debugging vue-files in devtools,
        // set this to false - it *may* help
        // https://vue-loader.vuejs.org/en/options.html#cachebusting
        cacheBusting: true,

        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    },

    build: {
        testEnv: require('./test.env'), // 测试
        prodEnv: require('./prod.env'), // 生产

        // Template for index.html
        index: path.resolve(__dirname, '../dist/index.html'),

        // Paths
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',

        // you can set by youself according to actual condition
        assetsPublicPath: './',

        /**
         * Source Maps
         */

        productionSourceMap: false,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report,
        generateAnalyzerReport: true
    }
}
