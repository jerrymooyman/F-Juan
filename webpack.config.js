'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app/main.js',
    output: {
        path: path.join(__dirname + '/app'),
        filename: 'scripts/bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],

    // watch: true,

    devServer: {
        contentBase: 'app'
    },

    module: {    
        loaders: [

            { 
                test: /.js?/, 
                loader: 'babel-loader', 
                exclude: /node_modules/,    
                query: {presets: ['es2015', 'react']}
            },

            // **IMPORTANT** This is needed so that each bootstrap js file required by
            // bootstrap-webpack has access to the jQuery object
            { 
                test: /bootstrap\/js\//, 
                loader: 'imports?jQuery=jquery' 
            },
            // {
            //     test: require.resolve("react-burger-menu"),
            //     loader: "imports?this=>window"
            // },
           
            // // the url-loader uses DataUrls.
            // // the file-loader emits files.
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },

            // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
            // loads bootstrap's css.
            { 
                test: /\.woff(\?v=\d+\.\d+\.\d+)?/,   
                loader: 'url?limit=10000&mimetype=application/font-woff' 
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    
                loader: 'url?limit=10000&mimetype=application/octet-stream' 
            },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    
                loader: 'file' 
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    
                loader: 'url?limit=10000&mimetype=image/svg+xml' 
            },

            { 
                test: /\.css$/, 
                loader: 'style-loader!css-loader' 
            },

            // // font awesome stuff
            // {
            //   test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            //   loader: "url?limit=10000&mimetype=application/font-woff"
            // }, {
            //   test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            //   loader: "url?limit=10000&mimetype=application/font-woff"
            // }, {
            //   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            //   loader: "url?limit=10000&mimetype=application/octet-stream"
            // }, {
            //   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            //   loader: "file"
            // }, {
            //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            //   loader: "url?limit=10000&mimetype=image/svg+xml"
            // }
        ]
    }
};
