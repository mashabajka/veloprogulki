const detailsRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const DetailsPage = require('../views/pages/DetailsPage');

const { Trail } = require('../../db/models');

detailsRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const entry = await Trail.findByPk(id);
    renderTemplate(DetailsPage, { entry }, res);
  } catch (error) {
    console.log('Error on detailsRouter.get() ====>>>>', error);
  }
});

module.exports = detailsRouter;
