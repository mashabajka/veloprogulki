const trailsRouter = require('express').Router();

const renderTemplate = require('../utils/renderTemplate');
const allTrails = require('../views/pages/AllTrails.jsx');
const { Trail } = require('../../db/models');
const { User } = require('../../db/models');

trailsRouter.get('/', async (req, res) => {
  const { login } = req.session;
  const trails = await Trail.findAll({
    order: [['average_rating', 'DESC']],
    include: [{
      model: User,
      attributes: ['login'],
    }],
  });
  console.log(trails);
  renderTemplate(allTrails, { login, trails }, res);
});

module.exports = trailsRouter;
