'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './app/app.js',
    output: {
        path: path.join(__dirname, './app'),
        filename: 'scripts/bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    module: {    
        loaders: [
            // **IMPORTANT** This is needed so that each bootstrap js file required by
            // bootstrap-webpack has access to the jQuery object
            { 
                test: /bootstrap\/js\//, 
                loader: 'imports?jQuery=jquery' 
            },

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
          
            { 
                test: /.js?/, 
                loader: 'babel-loader', 
                exclude: /node_modules/,    
                query: {presets: ['es2015', 'react']}
            }
        ]
    }
};