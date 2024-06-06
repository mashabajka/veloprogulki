/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', [
      {
        text: 'Красивый лесной маршрут, рекомендую! :)',
        user_id: 1,
        trail_id: 2,
      },
      {
        text: 'Хороший маршрут, правда очень короткий',
        user_id: 1,
        trail_id: 3,
      },
      {
        text: 'Классный веломаршрут, рекомендую, если хотите увидеть город',
        user_id: 2,
        trail_id: 1,
      },
      {
        text: 'Маршрут хороший, но далеко добираться :(',

        user_id: 2,
        trail_id: 3,
      },
      {
        text: 'Один из самых любимых маршрутов, очень рекомендую',

        user_id: 3,
        trail_id: 2,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
