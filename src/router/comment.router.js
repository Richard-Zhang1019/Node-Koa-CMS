const Router = require('koa-router');

const {
  verifyAuth
} = require('../middleware/auth.middleware')

const {
  create,
  reply
} = require('../controller/comment.controller')

const commentRouter = new Router({prefix: '/comment/:id'});

commentRouter.post('/', verifyAuth, create)
commentRouter.post('/commentId/reply', verifyAuth, reply)

// 修改评论
commentRouter.patch('/:commentId', verifyAuth, update)

// 删除评论

module.exports = commentRouter;