const indexRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const Home = require('../views/pages/Home');

const { Trail } = require('../../db/models');


indexRouter.get('/', async (req, res) => {
  // const { login, userId } = req.session;
  try {
    const files = await Trail.findAll({ order: [['createdAt', 'DESC']] });
    const entries = files.map((file) => file.get({ plain: true }));
    // console.log('-______________________-', entries);
    renderTemplate(Home, { entries }, res);
  } catch (error) {
    console.log('Error on indexRouter.get() ====>>>>', error);
  }
});

indexRouter.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('cookieName');
    res.redirect('/');
  });
});

module.exports = indexRouter;
