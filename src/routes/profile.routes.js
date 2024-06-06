const { Router } = require('express');
const renderTemplate = require('../utils/renderTemplate');
const Profile = require('../views/pages/Profile');

const { User, Trail } = require('../../db/models');

const profileRouter = new Router();

profileRouter.get('/', async (req, res) => {
  try {
    const { login, email } = req.session;
    const user = await User.findOne({ where: { email } });
    const user_id = user.id;

    const allTrails = await Trail.findAll({
      where: { user_id },
      include: [{ model: User, attributes: ['login'] }],
    });
    const plainTrails = allTrails.map((trail) => trail.get({ plain: true }));
    renderTemplate(Profile, { plainTrails, login }, res);
  } catch (error) {
    console.error('Ошибка по адресу /profile', error);
    res.redirect('/');
  }
});

profileRouter.post('/coordinates', async (req, res) => {
  try {
    const { email } = req.session;
    const user = await User.findOne({ where: { email } });
    const user_id = user.id;

    const { title, lineCoordinates } = req.body;
    const newTrail = await Trail.create({ title, trail_data: lineCoordinates, user_id });
    res.json({ createTrailSuccess: true, trail_id: newTrail.id });
  } catch (error) {
    console.error('Ошибка создания нового маршрута', error);
    res.json({ createTrailSuccess: false });
  }
});

profileRouter.get('/trail', async (req, res) => {
  try {
    const { email } = req.session;
    const user = await User.findOne({ where: { email } });
    const user_id = user.id;

    const trail_id = '5';
    const trail = await Trail.findByPk(trail_id);
    const { trail_data } = trail;
    res.json({ getTrailSuccess: true, trail_data, trail_id });
  } catch (error) {
    console.error('Ошибка получения деталей маршрута', error);
    res.json({ createTrailSuccess: false });
  }
});

profileRouter.post('/distance', async (req, res) => {
  try {
    const { email } = req.session;
    const user = await User.findOne({ where: { email } });
    const user_id = user.id;

    const { distance, trail_id } = req.body;
    await Trail.update({ distance }, { where: { id: trail_id } });
    res.json({ saveDistanceSuccess: true });
  } catch (error) {
    console.error('Ошибка обновления длины маршрута', error);
    res.json({ saveDistanceSuccess: false });
  }
});

module.exports = profileRouter;
