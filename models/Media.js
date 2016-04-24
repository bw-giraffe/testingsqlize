module.exports = function(sequelize, DataTypes) {
  var Media = sequelize.define('media', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    playthrough: {
    	type: BOOLEAN,
    	defaultValue: false
    }
  });
  return Task
}