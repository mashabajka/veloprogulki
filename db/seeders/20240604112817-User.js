/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        login: 'Маша',
        email: 'masha',
        password: '1',
      },
      {
        login: 'Даша',
        email: 'dasha',
        password: '2',
      },
      {
        login: 'Никита',
        email: 'nikita',
        password: '3',
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
 };
