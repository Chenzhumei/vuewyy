const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
    devServer: {
        proxy: {
            "/api": {
                "target": "http://localhost:3000",
                "secure": false,
                "logLevel": "debug",
                "changeOrigin": true,
                "pathRewrite": {
                  "^/api": ""
                }
              }
        }
    },
    chainWebpack: config => {
      config.resolve.alias
        .set("@", resolve("src"))
        .set("@assets", resolve("src/assets"))
        .set("@components", resolve("src/components"))
        .set("@store", resolve("src/store"))
        .set("@views", resolve("src/views"))
        .set("@service", resolve("src/service"))
        .set("public", resolve("public"));
    }
}