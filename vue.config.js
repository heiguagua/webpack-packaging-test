// vue.config.js
module.exports = {

  // 打包不生成sourcemap
  productionSourceMap: false,
    chainWebpack: config => {
      // 移除 prefetch 插件
    // config.plugins.delete('prefetch');
    
        config.module
          .rule("eslint")
          .use("eslint-loader")
          .loader("eslint-loader")
          .tap(options => {
            options.fix = true;
            return options;
          });
          
          config.optimization.splitChunks({
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 300000, // 依赖包超过300000bit将被单独打包
            automaticNameDelimiter:'-',
            // cacheGroups: {
            //   vendor: {
            //     test: /[\\/]node_modules[\\/]/,
            //     name(module) {
            //       const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            //       return `chunk.${packageName.replace('@', '')}`;
            //     },
            //     priority:10
            //   }
            // }
          })
      }
}