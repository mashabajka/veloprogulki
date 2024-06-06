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
    description: DataTypes.TEXT,
    average_rating: DataTypes.REAL,
    image_link: DataTypes.STRING,
    location: DataTypes.STRING,
    distance: DataTypes.FLOAT,
    coordinates: DataTypes.JSON,
    trail_center: DataTypes.STRING,
    trail_zoom: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Trail',
  });
  return Trail;
};
