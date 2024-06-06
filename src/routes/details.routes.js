const detailsRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const DetailsPage = require('../views/pages/DetailsPage.jsx');

const { User, Trail, UserTrail, Comment } = require('../../db/models');

detailsRouter.get('/:id', async (req, res) => {
  try {
    const { login } = req.session;
    const { id } = req.params;

    const comments = await Comment.findAll({
      where: { trail_id: id },
      include: {
        model: User,
        attributes: ['login'], // Автор комментария
      },
    });

    const trail = await Trail.findOne(
      { where: { id },
        include: {
          model: User,
          attributes: ['login'],

        } },
    );

    if (!login) {
      return renderTemplate(DetailsPage, { login: null, trail, comments, userRating: null }, res);
    }

    const user = await User.findOne({ where: { login } });
    const userRating = user ? await UserTrail.findOne({
      where: {
        user_id: user.id,
        trail_id: id,
      },
      attributes: ['user_rating'],
    }) : null;
    // console.log('##############', userRating.user_rating);
    renderTemplate(DetailsPage, { login, trail, comments, userRating: userRating ? userRating.user_rating : 0 }, res);
  } catch (error) {
    console.log('Error on detailsRouter.get() ====>>>>', error);
  }
});

detailsRouter.put('/:id', async (req, res) => {
  try {
    const { login } = req.session;
    const { id } = req.params;
    const { text } = req.body;
    const user = await User.findOne({ where: { login } });
    // console.log(user);
    const newComment = await Comment.create({
      trail_id: id,
      text,
      user_id: user.id,
    }, {
      returning: true,
      plain: true,
    });

    // console.log(newComment);
    res.json({ status: 'success', newComment });
  } catch (error) {
    res.json('ОШИБКА ПРИ ДОБАВЛЕНИИ КОММЕНТАРИЯ');
  }
});

detailsRouter.post('/newrating', async (req, res) => {
  const { login } = req.session;
  const user = await User.findOne({ where: { login } });
  try {
    const { rating, trailId } = req.body;

    // console.log(rating, trailId);

    // Проверить, существует ли запись с рейтингом от текущего пользователя к выбранной карточке
    const existingRating = await UserTrail.findOne({
      where: {
        user_id: user.id,
        trail_id: trailId,
      },
    });

    if (existingRating) {
      return res.status(400).json({ ratingError: 'Вы уже оставляли оценку для этого маршрута!' });
    }

    // Создать новую запись в UserTrail
    await UserTrail.create({
      user_id: user.id,
      trail_id: trailId,
      user_rating: rating,
    });

    // Пересчитать средний рейтинг
    const ratings = await UserTrail.findAll({
      where: { trail_id: trailId },
      attributes: ['user_rating'],
    });

    // console.log('************************', ratings);

    // Вычислить средний рейтинг
    const average_rating = ratings.length > 0
      ? (ratings.reduce((acc, num) => acc + num.user_rating, 0) / ratings.length).toFixed(1)
      : '0';
      // console.log('###############', average_rating);

    // Обновить запись в таблице Trail
    const trail = await Trail.findByPk(trailId);
    trail.average_rating = average_rating;
    await trail.save();
    // console.log('###############', trail);

    res.json(trail); // Вернуть обновленные данные
  } catch (error) {
    console.log('Error on detailsRouter.post() ====>>>>', error);
    res.status(500).send('Error creating star');
  }
});

module.exports = detailsRouter;
