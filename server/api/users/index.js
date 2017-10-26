const router = require('express').Router();
const { User, Sneaker } = require('../../db/models');

module.exports = router;

// function adminGatekeeper(req, res, next) {
//   if (!req.user) {
//     return res.status(401).send('You are not logged in');
//   } else if (!req.user.isAdmin) {
//     return res.status(403).send('You are not authorized to perform this action');
//   };
//   next();
// };

// function userGatekeeper(req, res, next) {
//   if (!req.user) {
//     res.status(401).send('You are not logged in');
//   }
//   next();
// }

router.get('/', (req, res, next) => {
  User.findAll({
    attributes: ['id', 'email', 'isAdmin', 'height',
      'weight', 'gender', 'hasWideFeet'],
    include: [Sneaker], // eager loading
  })
    .then(users => res.json(users))
    .catch(next);
});
