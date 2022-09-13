class CommentController {
  async create(ctx, next) {
    ctx.body = '发表评论成功';

    const { momentId, content } = ctx.request.body;
    const { id } = ctx.user; 

    

  }
}

module.exports = new CommentController();
