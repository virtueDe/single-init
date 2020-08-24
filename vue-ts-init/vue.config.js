// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@views", resolve("src/views"))
      .set("@router", resolve("src/router"))
      .set("@store", resolve("src/store"))
      .set("@layouts", resolve("src/layouts"))
      .set("@img", resolve("src/assets/img"));
  },
  configureWebpack: {},
  devServer: {
    port: 8886
  }
};
