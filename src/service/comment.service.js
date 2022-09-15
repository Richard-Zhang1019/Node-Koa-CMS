const connection = require('../app/database')

class CommentService {
  async create(comentId, content, userId) {
    const statement = `INSERT INTO comment (content, moment_id, user_id) VALUES (?, ?, ?);)`;
    const [result] = connection.execute(statement, [content, comentId, userId]);
    return result;
  }
}

module.exports = new CommentService();