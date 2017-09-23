const router = require('express').Router();
const {Sneaker, User} = require('../db/models');
module.exports = router;

router.get('/', (req, res, next) => {
  Sneaker.findAll({
    order: ['id'],
    include: [User],
  })
    .then((users) => res.json(users))
    .catch(next);
});
