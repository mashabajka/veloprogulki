const indexRouter = require('express').Router();
const bcrypt = require('bcrypt');

const renderTemplate = require('../utils/renderTemplate');
const Home = require('../views/pages/Home.jsx');
const { User } = require('../../db/models');

indexRouter.get('/', (req, res) => {
  const { login } = req.session; //! из SESSION

  renderTemplate(Home, { login }, res);
});

indexRouter.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('cookieName');
    res.redirect('/');
  });
});

indexRouter.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ where: { email } });
    console.log(user);
    if (!user) {
      console.log('user not found');
      res.json({ logErr: `Пользователь с ${email} не найден, 
      вы будете перенаправлены на страницу регистрации` });
    } else {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.email = user.email;
        req.session.login = user.login;

        req.session.save(() => {
          console.log('Password correct. Session saved');
          res.json({ logDone: `Welcome ${user.login}` });
        });
      } else {
        console.log('Wrong password');
        res.json({ passErr: 'Неверный пароль, попробуйте ещё раз' }); 
      }
    }
  } catch (error) {
    console.log('loginRouter.post =>', error);
  }
});

module.exports = indexRouter;
