# howto-react-with-webpack

* [Webpack](#webpack-notes)
    - [Webpack Dev Server]
* [npm](#npm-notes)
* [React]
* [React Router]
* [Redux]
    - [Redux Middleware]

## Webpack Notes

### Bacis CLI Commands
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

    webpack -d
*builds source map files*

### Webpack Dev Server

    webpack-dev-server
*builds and runs application in a local web server at localhost:8080/webpack-dev-server and localhost:8080.*

    webpack-dev-server --inline
*like above, but will allow localhost:8080 with auto reload on file changes*

### Preloaders
Preloaders are configured in the module.preloaders section as an array.
```javascript
    preloaders: {
            test: /\.js$/,  *regex to send files through to the loader*
            exclude: /node_modules/,    *regex to exclude files from the loader*    
            loader: 'jshint'  *the loader*
        }
```

#### Useful preloaders
  * jshint-loader

### Loaders
Loaders are configured in the module.loaders section as an array.
```javascript
    loaders: {
            test: /\.es6$/,  *regex to send files through to the loader*
            exclude: /node_modules/,    *regex to exclude files from the loader*    
            loader: 'babel-loader'  *the loader*
        }
```

#### Useful loaders
  * babel-loader
  * strip-loader

#### Babel (transpiler)
  * babel-core
  * babel-loader
  * babel-preset-es2015

#### Strip-Loader
```javascript
    var WebpackStrip = require('strip-loader');
    var devConfig = require('./webpack.config');
    var stripLoader = {
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: WebpackStrip.loader('console.log')
    }
    devConfig.module.loaders.push(stripLoader);
    module.exports = devConfig;
```

### webpack.config
```javascript
    var path = require('path');
    module.exports = {
        context: path.resolve('js'), //tells webpack to look for entry files in the 'js' directory
        entry: ['file1.js', 'file2.js'], //tells webpack to start bundling from these files
        output: {
            path: path.resolve('build/js'), //tells webpack to put the bundle.js file in the build/js directory
            publicPath: '/public/assets/js/', //tells webpack that bundle.js will be served from this directory
            filename: "bundle.js"
        },

        watch: true,

        devServer: {
            contentBase: 'public'
        },

        module: {
            loaders: [
                {
                    test: /\.es6$/, //regex to send files through to the loader*
                    exclude: /node_modules/, //regex to exclude files from the loader*    
                    loader: 'babel-loader' //the loader
                }
            ]
        }
    }
    extensions: ['', 'js', 'es6'] -override default file behaviour and specify which file types webpack should pickup*
```

## React

## React Router
[Github repo](https://github.com/reactjs/react-router)

## Redux
[Redux on Github](https://github.com/reactjs/redux)

### Resources
[Webpack fundamentals - PluralSight](https://app.pluralsight.com/library/courses/webpack-fundamentals/table-of-contents)
[Getting started with Redux](https://egghead.io/series/getting-started-with-)redux
