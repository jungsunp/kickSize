const Sequelize = require('sequelize');
const db = require('../db');

const Sneaker = db.define('sneaker', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  brand: {
    type: Sequelize.STRING,
  },
  style: {
    // model number also used to locate photo in assets
    type: Sequelize.STRING,
  },
  colorway: {
    type: Sequelize.STRING,
  },
  retailPrice: {
    type: Sequelize.INTEGER,
    get() {
      // converts from price in cents to price in dollars
      return this.getDataValue('retailPrice') / 100;
    },
    set(priceWithDecimal) {
      // converts from price in dollars to price in cents
      this.setDataValue('retailPrice', priceWithDecimal * 100);
    },
  },
  releaseDate: {
    // consider switching to Sequelize.DATE
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
});

module.exports = Sneaker;
