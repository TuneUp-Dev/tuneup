const { override, addWebpackModuleRule } = require("customize-cra");

module.exports = override(
  addWebpackModuleRule({
    test: /\.js$/,
    use: ["source-map-loader"],
    enforce: "pre",
    exclude: /node_modules\/@formatjs\/fast-memoize/,
  })
);
