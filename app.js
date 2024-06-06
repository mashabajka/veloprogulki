require('@babel/register');
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const { checkUser, secureRoute } = require('./src/middlewares/common');

const dbConnectionCheck = require('./src/middlewares/dbCheck');
const indexRouter = require('./src/routes/index.routes');
const regRouter = require('./src/routes/reg.routes');
const trailsRouter = require('./src/routes/allTrails.routes');
const profileRouter = require('./src/routes/profile.routes');
const detailsRouter = require('./src/routes/details.routes');

const app = express();
const { PORT } = process.env;

const sessionConfig = {
  name: 'cookieName',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Mellon',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 1000 * 60 * 60,
    httpOnly: true,
  },
};

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(session(sessionConfig));
app.use(dbConnectionCheck);
app.use('/uploads', express.static(path.join(__dirname, 'src', 'uploads')));

app.use('/registration', secureRoute, regRouter);
app.use('/alltrails', trailsRouter);
app.use('/profile', profileRouter);
app.use('/details', detailsRouter);
app.use('/', indexRouter);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
