const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserTrail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserTrail.init({
    comment: DataTypes.TEXT,
    user_rating: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    trail_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'UserTrail',
  });
  return UserTrail;
};
