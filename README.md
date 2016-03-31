# howto-webpack

# Bacis CLI Commands
    webpack app.js
*create a bundle with app.js as entry point*

    webpack
*will search current directory for a webpack.config file*

    webpack --config myconfigfile.config
*will run webpack with the specified config file*

    webpack --watch
*watches files for changes and reloads app automatically*

    webpack --config myconfigfile.config
*will run webpack with the specified config file*

    webpack --config myconfigfile.config
*will run webpack with the specified config file*

    webpack -p
*build a production bundle*

# Webpack Dev Server

    webpack-dev-server
*builds and runs application in a local web server at localhost:8080/webpack-dev-server and localhost:8080.*

    webpack-dev-server --inline
*like above, but will allow localhost:8080 with auto reload on file changes*

# Preloaders
Preloaders are configured in the module.preloaders section as an array.
preloaders: {
        test: /\.js$/,  *regex to send files through to the loader*
        exclude: /node_modules/,    *regex to exclude files from the loader*    
        loader: 'jshint'  *the loader*
    }

## Useful preloaders
  * jshint-loader

# Loaders
Loaders are configured in the module.loaders section as an array.
loaders: {
        test: /\.es6$/,  *regex to send files through to the loader*
        exclude: /node_modules/,    *regex to exclude files from the loader*    
        loader: 'babel-loader'  *the loader*
    }

## Useful loaders
  * babel-loader
  * strip-loader

## Babel (transpiler)
Requires modules:
    * babel-core
    * babel-loader
    * babel-preset-es2015

## Strip-Loader

    var WebpackStrip = require('strip-loader');
    var devConfig = require('./webpack.config');
    var stripLoader = {
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: WebpackStrip.loader('console.log')
    }
    devConfig.module.loaders.push(stripLoader);
    module.exports = devConfig;


# Resolve
## extensions: ['', 'js', 'es6']
*override default file behaviour and specify which file types webpack should pickup*

# webpack.config
## Anatomy
entry: "app.js"
  *top most file or files in the application*
output: {
    filename: "bundle.js"
}
  *output file*
watch: true
  *watch files for changes*


## sample file
======
    'use strict';
    var path = require('path');
    var webpack = require('webpack');
    module.exports = {
        entry: './src/main.js',
        output: {
            // path: path.join(__dirname, './dist'),
            filename: 'bundle.js'
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: "jquery"
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
                    loader: "url?limit=10000&mimetype=application/font-woff" 
                },
                { 
                    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    
                    loader: "url?limit=10000&mimetype=application/octet-stream" 
                },
                { 
                    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    
                    loader: "file" 
                },
                { 
                    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    
                    loader: "url?limit=10000&mimetype=image/svg+xml" 
                },

                { 
                    test: /\.css$/, 
                    loader: "style-loader!css-loader" 
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


# npm

## scripts
We can configure a script to get node to run the webpack-dev-server for us
"scritps": {
        "start": "webpack-dev-server"
    }

# npm dev packages
babel packages to enabled es6
======
    babel-core:
    babel-preset-es2015: 

loaders for webpack
======
    babel-loader
    react-loader": "^2.2.0",
    css-loader": "^0.23.1",
    file-loader": "^0.8.5",
    exports-loader": "^0.6.3",
    imports-loader": "^0.6.5",
    less-loader": "^2.2.2",
    url-loader": "^0.5.7",
    style-loader": "^0.13.0",

react packages
======
    babel-preset-react": "^6.3.13",
    redux-devtools": "^3.1.1",

    webpack": "^1.12.14"

# npm packages installed globally
    webpack
    webpack-dev-server

# npm application packages
    "bootstrap": "^3.3.6",
    "bootstrap-webpack": "0.0.5",
    "dropzone": "^4.3.0",
    "es6-promise": "^3.1.2",
    "extract-text-webpack-plugin": "^1.0.1",
    "isomorphic-fetch": "^2.2.1",
    "jquery": "^2.2.1",
    "jquery.soap": "^1.6.7",
    "less": "^2.6.0",
    "lodash": "^4.5.1",
    "moment": "^2.11.2",
    "react": "^0.14.7",
    "react-dom": "^0.14.7",
    "react-dropzone": "^3.3.2",

redux 
======
    react-router: router

redux 
======
    redux
    react-redux: react support for redux
    react-router-redux: keep redux and router state in sync 

redux middleware
======
    redux-logger": "^2.6.1",
    redux-thunk": "^2.0.1",

other
======
    toastr": "^2.1.2"


references:
https://app.pluralsight.com/library/courses/webpack-fundamentals/table-of-contents
