const crypto = require('crypto');
const Sequelize = require('sequelize');
const db = require('../../db');

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
  },
  salt: {
    type: Sequelize.STRING,
  },
  googleId: {
    type: Sequelize.STRING,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  photo: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  height: {
    // store height in inches
    type: Sequelize.INTEGER,
  },
  weight: {
    // store wieght in lbs
    type: Sequelize.INTEGER,
  },
  gender: {
    type: Sequelize.ENUM,
    values: ['male', 'female'],
  },
  hasWideFeet: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User;

// instanceMethods
User.prototype.correctPassword = function(candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt) === this.password;
};

// classMethods
User.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64');
};

User.encryptPassword = function(plainText, salt) {
  return crypto.createHash('sha1').update(plainText).update(salt).digest('hex');
};

// hooks
const setSaltAndPassword = (user) => {
  if (user.changed('password')) {
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password, user.salt);
  }
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);
