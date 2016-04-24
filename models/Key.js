module.exports = function(sequelize, DataTypes) {
  var Key = sequelize.define('key', {
    name: DataTypes.STRING,
    instructions: DataTypes.STRING
  });
  return Task
}