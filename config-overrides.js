const { override, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
  addWebpackModuleRule({
    test: /\.js$/,
    devtool: false,
    use: ["source-map-loader"],
    enforce: "pre",
    exclude: /node_modules\/@formatjs\/fast-memoize/,
  })
);
