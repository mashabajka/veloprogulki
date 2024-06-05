const detailsRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const DetailsPage = require('../views/pages/DetailsPage.jsx');

const { Trail } = require('../../db/models');

detailsRouter.get('/:id', async (req, res) => {
  const { login } = req.session;
  try {
    const { id } = req.params;
    const trail = await Trail.findByPk(id);
    renderTemplate(DetailsPage, { login, trail }, res);
  } catch (error) {
    console.log('Error on detailsRouter.get() ====>>>>', error);
  }
});

module.exports = detailsRouter;