const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Trail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
      this.belongsToMany(models.User, {
        through: 'UserTrails',
        foreignKey: 'trail_id',
      });
    }
  }
  Trail.init({
    title: DataTypes.STRING,
    score: DataTypes.INTEGER,
    image_link: DataTypes.STRING,
    location: DataTypes.STRING,
    distance: DataTypes.INTEGER,
    start_lat: DataTypes.STRING,
    start_lon: DataTypes.STRING,
    custom_points: DataTypes.JSON,
    finish_lat: DataTypes.STRING,
    finish_lon: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Trail',
  });
  return Trail;
};
