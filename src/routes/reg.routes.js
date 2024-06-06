const regRouter = require('express').Router();
const bcrypt = require('bcrypt');

const renderTemplate = require('../utils/renderTemplate');
const Registration = require('../views/pages/Registration.jsx');
const { User } = require('../../db/models');

regRouter.get('/', (req, res) => {
  const { login } = req.session;
  if (login) {
    res.redirect('/');
  } else {
    renderTemplate(Registration, { login }, res);
  }
});

regRouter.post('/', async (req, res) => {
  try {
    const { login, password, email } = req.body;

    const userMail = await User.findOne({ where: { email } });
    const userLog = await User.findOne({ where: { login } });

    if (userMail) {
      return res.status(400).json({ regErr: `Пользователь с email ${email} уже существует` });
    }

    if (userLog) {
      return res.status(400).json({ regErr: `Логин ${login} уже занят, придумайте другой` });
    }

    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ login, email, password: hash });

    req.session.login = newUser.login;
    req.session.email = newUser.email;

    req.session.save(() => {
      res.json({ regDone: `Registration succes ${login}` });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ошибка при регистрации пользователя' });
  }
});

module.exports = regRouter;
