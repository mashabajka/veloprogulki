/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Trails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      average_rating: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      image_link: {
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
      },
      distance: {
        type: Sequelize.INTEGER,
      },
      start_lat: {
        type: Sequelize.STRING,
      },
      start_lon: {
        type: Sequelize.STRING,
      },
      custom_points: {
        allowNull: true,
        type: Sequelize.JSON,
      },
      finish_lat: {
        type: Sequelize.STRING,
      },
      finish_lon: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Trails');
  },
};
