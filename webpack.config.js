 module.exports = {
     entry: "./src/_js/app.js",
     output: {
         path: __dirname + '/src/assets',
         filename: "bundle.js"
     },
     module: {
         loaders: [{
             test: /\.js?$/,
             exclude: /(node_modules)/,
             loader: 'babel-loader',
             options: {
                 presets: ['stage-3']
             }
         }],
         rules: [{
             test: /\.css$$/,
             use: ['style-loader', 'css-loader']
         }]
     }
 };