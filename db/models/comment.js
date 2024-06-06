const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Trail }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Trail, { foreignKey: 'trail_id' });
    }
  }
  Comment.init({
    text: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
    trail_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
