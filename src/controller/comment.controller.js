const service = require('../service/comment.service.js');

class CommentController {
  async create(ctx, next) {
    ctx.body = '发表评论成功';

    const { momentId, content } = ctx.request.body;
    const { id } = ctx.user; 

    const result = await service.create(momentId, content, id);

    ctx.body = result
}

module.exports = new CommentController();