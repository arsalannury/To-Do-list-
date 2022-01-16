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
    done: { import: './src/Done.js', filename: './dist/done.js' },
    delete : {import: './src/Delete.js', filename: './dist/delete.js'},
    aboutMe: {import: './src/AboutMe.js', filename: './dist/aboutMe.js'}
  },
  
};
