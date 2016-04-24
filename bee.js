module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Bee', {
		serial: Sequelize.STRING,
		description: Sequelize.STRING
	})
};