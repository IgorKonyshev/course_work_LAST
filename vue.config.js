module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        vue$: "vue/dist/vue.esm-bundler.js",
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production"
    ? "/igorekshop_prime/"
    : "/",
};
