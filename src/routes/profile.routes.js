const { Router } = require('express');
const renderTemplate = require('../utils/renderTemplate');
const Profile = require('../views/pages/Profile.jsx');

const { User, Trail } = require('../../db/models');

const profileRouter = new Router();

profileRouter.get('/', async (req, res) => {
  try {
    const { login, email } = req.session;
    const user = await User.findOne({ where: { email } });
    const user_id = user.id;

    const allTrails = await Trail.findAll({
      where: { user_id },
      include: [{ model: User, attributes: ['username'] }],
    });
    const plainTrails = allTrails.map((trail) => trail.get({ plain: true }));
    renderTemplate(Profile, { plainTrails, login }, res);
  } catch (error) {
    console.error('Ошибка по адресу /profile', error);
    res.redirect('/');
  }
});

profileRouter.post('/', async (req, res) => {
  try {
    const { email } = req.session;
    const user = await User.findOne({ where: { email } });
    const user_id = user.id;

    const {
      title, start_lat, start_lon, finish_lat, finish_lon,
    } = req.body;
    await Trail.create({
      title, start_lat, start_lon, finish_lat, finish_lon, user_id,
    });
    res.redirect('/profile');
    // res.json({ createTrailSuccess: true })
  } catch (error) {
    console.error('Ошибка создания нового маршрута', error);
    // res.json({ createTrailSuccess: false });
  }
});

module.exports = profileRouter;
