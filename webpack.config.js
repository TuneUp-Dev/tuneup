const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // Entry point for your app
  output: {
    path: path.resolve(__dirname, "build"), // Output directory
    filename: "bundle.js",
  },
  mode: "production", // or 'development'
  devtool: "eval", // Set source map strategy if needed
  stats: {
    warnings: false, // Suppresses all warnings in Webpack
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre",
        exclude: ["/node_modules/@formatjs/fast-memoize/"],
      },
    ],
  },
};
