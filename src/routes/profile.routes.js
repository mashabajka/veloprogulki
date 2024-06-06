const { Router } = require('express');
const multer = require('multer');
const path = require('path');
const fileMiddleware = require('../middlewares/fileMiddleware');
const renderTemplate = require('../utils/renderTemplate');
const Profile = require('../views/pages/Profile');
const NewTrail = require('../views/pages/NewTrail');

const { User, Trail } = require('../../db/models');

const profileRouter = new Router();

profileRouter.post('/', fileMiddleware.array('images'), async (req, res) => {
  try {
    const { email } = req.session;
    const user = await User.findOne({ where: { email } });
    const user_id = user.id;
    const { trail_id } = req.body;

    const imageUploadPromises = req.files.map(async (file) => Trail.create({
      image_path: path.join('uploads/image', String(trail_id), file.filename),
      user_id,
      trail_id,
    }));

    const imagePaths = await Promise.all(imageUploadPromises);

    if (imagePaths.length === req.files.length) {
      res.json(imagePaths);
    } else {
      res.status(400).send('Ошибка сохранения фото');
    }
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

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

profileRouter.post('/save', fileMiddleware.array('images'), async (req, res) => {
  try {
    const { email } = req.session;
    const user = await User.findOne({ where: { email } });
    const user_id = user.id;

    const { title, description, image_link, location, coordinates } = req.body;
    const parsedCoordinates = JSON.parse(coordinates);
    const { lineCoordinates } = parsedCoordinates;

    const imagePath = req.files.length > 0 ? `/uploads/image/${req.files[0].originalname}` : null;

    const newTrail = await Trail.create({
      title,
      description,
      image_link: imagePath,
      location,
      coordinates: lineCoordinates,
      user_id,
    });

    res.json({ createTrailSuccess: true, trail_id: newTrail.id });
  } catch (error) {
    console.error('Ошибка создания нового маршрута', error);
    res.json({ createTrailSuccess: false });
  }
});

profileRouter.get('/coordinates/:id', async (req, res) => {
  try {
    const { email } = req.session;
    const user = await User.findOne({ where: { email } });
    const user_id = user.id;
    const trail_id = req.params.id;
    const trail = await Trail.findByPk(trail_id);
    const { coordinates } = trail;
    res.json({ getTrailSuccess: true, coordinates, trail_id });
  } catch (error) {
    console.error('Ошибка получения деталей маршрута', error);
    res.json({ createTrailSuccess: false });
  }
});

profileRouter.get('/newtrail/:id', async (req, res) => {
  try {
    const { login, email } = req.session;
    const user = await User.findOne({ where: { email } });
    const user_id = user.id;

    const trail_id = req.params.id;
    const newTrail = await Trail.findByPk(trail_id);
    const plainNewTrail = newTrail.get({ plain: true });

    renderTemplate(NewTrail, { plainNewTrail, login }, res);
  } catch (error) {
    console.error('Ошибка по адресу /newtrail/:id', error);
    res.redirect('/');
  }
});

profileRouter.post('/save/distance', async (req, res) => {
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
