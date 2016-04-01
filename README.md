# howto-react-with-webpack

* [Webpack notes](#webpack-notes)
    - [Webpack Dev Server]
* [npm notes](#npm-notes)
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

### Resolve
```javascript
    extensions: ['', 'js', 'es6']
```
*override default file behaviour and specify which file types webpack should pickup*

### webpack.config
#### Anatomy
    entry: "app.js"
 *top most file or files in the application*
```javascript
    output: {
        filename: "bundle.js"
    }
//output file*
    watch: true
//watch files for changes*
```

## React

## React Router
[Github repo](https://github.com/reactjs/react-router)

## Redux
[Redux on Github](https://github.com/reactjs/redux)

### Resources
https://egghead.io/series/getting-started-with-redux