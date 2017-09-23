const Sequelize = require('sequelize');
const db = require('../db');

const UserSneaker = db.define('user_sneaker', {
  size: {
    // size in US format
    type: Sequelize.INTEGER,
  },
}, {
  tableName: 'user_sneaker',
});

module.exports = UserSneaker;
