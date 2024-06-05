const detailsRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const DetailsPage = require('../views/pages/DetailsPage.jsx');

const { User, Trail, UserTrail } = require('../../db/models');

detailsRouter.get('/:id', async (req, res) => {
  const { login } = req.session;
  try {
    const { id } = req.params;
    const trail = await Trail.findOne(
      { where: { id },
        include: [{
          model: User,
          attributes: ['login'],
        }] },
    );
    // const comments = await UserTrail.findAll({
    //   where: { trail_id: id },
    //   include: [{
    //     model: User,
    //     attributes: ['login'], // Автор комментария
    //   }],
    // });
    //!renderTemplate(DetailsPage, { login, trail, comments }, res);  Закомментировала передачу comments в пропсы, чтобы без них пока работало
    renderTemplate(DetailsPage, { login, trail }, res);
  } catch (error) {
    console.log('Error on detailsRouter.get() ====>>>>', error);
  }
});

detailsRouter.post('/newrating', async (req, res) => {
  const { login } = req.session;
  const user = await User.findOne({ where: { login } });
  try {
    const { average_rating, id } = req.body;
    console.log('-______________-', req.body);

    const newEntry = await UserTrail.create({
      user_rating: average_rating, user_id: user.id, trail_id: id });
  } catch (error) {
    console.log('Error on detailsRouter.post() ====>>>>', error);
    res.status(500).send('Error creating star');
  }
});

module.exports = detailsRouter;
