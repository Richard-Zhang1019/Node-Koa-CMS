class CommentService {
  async create(commentId, content, userId) {
    const statement = `INSERT INTO comment (content, moment_id, user_id) VALUES (?, ?, ?);)`;
  }
}

module.exports = new CommentService();