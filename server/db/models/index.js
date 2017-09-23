const User = require('./user');
const Sneaker = require('./sneaker');
const UserSneaker = require('./user_sneaker');

User.belongsToMany(Sneaker, {through: UserSneaker});
Sneaker.belongsToMany(User, {through: UserSneaker});

module.exports = {
  User,
  Sneaker,
  UserSneaker,
};
