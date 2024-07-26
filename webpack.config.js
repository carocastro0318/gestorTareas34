const path = require('path');

module.exports = {
  entry: './src/index.js', //Punto de entrada de la aplicación = archivo de entrada donde empaquetará el webpack
  output: {
    filename: 'bundle.js',  //Nombre del archivo de salida
    path: path.resolve(__dirname, 'dist'), //Carpeta de salida
  },
  module: {
    rules:[
        {
            test: /\.css$/, //Regex para identificar archivos CSS
            use: ['style-loader','css-loader'], //Loaders para procesar archivos CSS
        },
        {
           test: /\.js$/, //Regex para identificar archivos JS
           exclude: /node_modules/, //Excluir la carpeta node_modules
           use: {
            loader: 'babel-loader',//Configurar loader para pasara JS moderno a JS más antiguo  para todos los navegadores
            options:{
                presets: ['@babel/preset-env'],
            },
           },
        },
    ],
  },
  devtool: 'source-map', //Generar source maps para facilitar la depuración
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), //Carpeta principal del servidor
    compress: true, // Habilitar la compresión gzip
    port: 9000, //Puerto del servidor de desarrollo
  },
};

