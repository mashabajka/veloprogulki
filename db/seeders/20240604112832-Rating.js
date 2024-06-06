/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Ratings', [
      {
        user_rating: 9,
        user_id: 1,
        trail_id: 2,
      },
      {
        user_rating: 5,
        user_id: 1,
        trail_id: 3,
      },
      {
        user_rating: 7,
        user_id: 2,
        trail_id: 1,
      },
      {
        user_rating: 6,
        user_id: 2,
        trail_id: 3,
      },
      {
        user_rating: 10,
        user_id: 3,
        trail_id: 2,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ratings', null, {});
  },
 };
