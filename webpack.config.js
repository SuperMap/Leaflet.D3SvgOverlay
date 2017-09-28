var webpack = require('webpack');
var pkg = require('./package.json');
var packageName = "d3Layer";
var banner = `
    Leaflet.D3SvgOverlay.(${pkg.homepage})
    Copyright© 2000-2017 SuperMap Software Co. Ltd
    license: ${pkg.license}
    version: v${pkg.version}
`;
module.exports = {
    //页面入口文件配置
    entry: './index.js',
    // entry: './src/L.D3SvgOverlay.js',
    //入口文件输出配置
    output: {
        path: __dirname + '/dist',
        filename: packageName + ".js"
    },

    //其它解决方案配置
    resolve: {
        extensions: ['.js']
    },
    externals: {
        'leaflet': 'L',
        'd3': "d3"
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    plugins: [
        new webpack.BannerPlugin(banner)
    ]
};