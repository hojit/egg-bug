/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1552723365823_5202';

  // add your middleware config here
  config.middleware = [];
  // 自定义加载配置
  config.customLoader={
      api: {
        // relative to app.config.baseDir
        directory: 'app/api',
        inject: 'app',
        loadunit: false,
        // you can also use other LoaderOptions
     }
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
