/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserTrails', [
      {
        comment: 'Красивый лесной маршрут, рекомендую! :)',
        user_id: 1,
        trail_id: 2,
      },
      {
        comment: 'Хороший маршрут, правда очень короткий',
        user_id: 1,
        trail_id: 3,
      },
      {
        comment: 'Классный веломаршрут, рекомндую, если хотите увидеть город',
        user_id: 2,
        trail_id: 1,
      },
      {
        comment: 'Маршрут хороший, но далеко добираться :(',
        user_id: 2,
        trail_id: 3,
      },
      {
        comment: 'Один из самых любимых маршрутов, очень рекомендую',
        user_id: 3,
        trail_id: 2,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserTrails', null, {});
  },
 };
