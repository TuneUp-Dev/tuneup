// eslint-disable-next-line
const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // Entry point of your app
  output: {
    path: path.resolve(__dirname, "build"), // Output directory
    filename: "bundle.js", // Output bundle file
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // Automatically resolve these extensions
    fallback: {
      process: require.resolve("process/browser"), // Provide a browser polyfill for process
    },
  },
  mode: "production", // Change to 'development' if debugging
  devtool: false, // Disable source maps; set to 'source-map' if debugging
  stats: {
    warnings: false, // Suppress all warnings in the console
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Match .ts and .tsx files
        exclude: /node_modules/, // Exclude node_modules
        use: "ts-loader", // Use ts-loader for TypeScript
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: "babel-loader", // Babel loader for JavaScript (optional)
        },
      },
    ],
  },
};
