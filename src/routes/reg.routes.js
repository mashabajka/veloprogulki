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

    const user = await User.findOne({ where: { login } });
    if (user) {
      res.json({ regErr: `User with email ${email} already exists` });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ login, email, password: hash });
      req.session.login = newUser.login;
      req.session.email = newUser.email;
      req.session.save(() => {
        // res.redirect('/');
        res.json({ regDone: `Registration succes ${login}` });
      });
    }
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});

module.exports = regRouter;
