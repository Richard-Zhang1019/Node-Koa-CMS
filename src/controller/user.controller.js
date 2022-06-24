const fs = require('fs');

const userService = require('../service/user.service');
const { AVATAR_PATH } = require('../constants/file-path');


class UserController {
  async create(ctx, next) {
    // 获取用户请求传递的参数
    const user = ctx.request.body;

    // 查询数据
    const result = await userService.create(user);

    // 返回数据
    ctx.body = result;
  }
}

module.exports = new UserController();
