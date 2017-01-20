'use strict'
const pkg = require('../package')

module.exports = {
    port: 4000,
    title: 'Vue starter',
    publicPath: '/',
    // add these dependencies to a standalone vendor bundle
    vendor: [
        'vue',
        'vuex',
        'vue-router',
        'vuex-router-sync',
        'promise-polyfill'
    ],
    // disable babelrc by default
    babel: {
        babelrc: false,
        presets: [
            ['es2015', {modules: false}],
            'stage-1'
        ],
        // support jsx in render function
        plugins: [
            'transform-vue-jsx',
            'transform-runtime'
        ]
    },
    postcss: [
        // add prefix via postcss since it's faster
        require('autoprefixer')({
            // Vue does not support ie 8 and below, so neither do we :)
            browsers: ['last 2 versions', 'ie > 8']
        }),
        require('postcss-nested'),
        require('postcss-font-magician')({
            // hosted: './src/fonts'
        })
    ],
    cssModules: false,
}
