module.exports = function(sequelize, DataTypes) {
  var Media = sequelize.define('media', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    url: DataTypes.STRING,
    playthrough: DataTypes.BOOLEAN
  });
  return Media
}