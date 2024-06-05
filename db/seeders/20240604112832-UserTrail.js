/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserTrails', [
      {
        comment: 'Красивый лесной маршрут, рекомендую! :)',
        user_rating: 9,
        user_id: 1,
        trail_id: 2,
      },
      {
        comment: 'Хороший маршрут, правда очень короткий',
        user_rating: 5,
        user_id: 1,
        trail_id: 3,
      },
      {
        comment: 'Классный веломаршрут, рекомендую, если хотите увидеть город',
        user_rating: 7,
        user_id: 2,
        trail_id: 1,
      },
      {
        comment: 'Маршрут хороший, но далеко добираться :(',
        user_rating: 6,
        user_id: 2,
        trail_id: 3,
      },
      {
        comment: 'Один из самых любимых маршрутов, очень рекомендую',
        user_rating: 10,
        user_id: 3,
        trail_id: 2,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserTrails', null, {});
  },
 };
