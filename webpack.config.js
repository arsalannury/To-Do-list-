module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  entry : {
    home: { import: './src/index.js', filename: './dist/main.js' },
    done: { import: './src/Done.js', filename: './dist/done.js' }
  },
  
};
