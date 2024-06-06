const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Trail, UserTrail, Comment }) {
      this.hasMany(Trail, {
        foreignKey: 'user_id',
      });
      this.hasMany(Comment, {
        foreignKey: 'user_id',
      });
      this.belongsToMany(Trail, {
        through: UserTrail,
        foreignKey: 'user_id',
      });
    }
  }
  User.init({
    login: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
