const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    //配置路劲别名
    resolve: {
      alias: {
        utils: "@/utils",
      },
    },
  },
});
