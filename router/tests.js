const Router = require('koa-router');
const test = new Router();
const { testController } = require('../controller/Test');

/**
 * 项目运行后 浏览器输出 http://localhost:4004/api/test/getInfo 即可
 */
test.prefix("/test");

// user 根目录
test.get('/getInfo',testController.test);

module.exports = test;