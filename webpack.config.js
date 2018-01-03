 module.exports = {
     entry: "./src/_js/app.js",
     output: {
         path: __dirname + '/dist',
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
             }, {
                 test: /\.scss$/,
                 use: [{
                     loader: "style-loader"
                 }, {
                     loader: "css-loader"
                 }, {
                     loader: "sass-loader"
                 }]
             }

         ]
     }
 };