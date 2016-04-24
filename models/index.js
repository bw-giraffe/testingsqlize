var Sequelize = require('sequelize');
// var config = require('./Config').database; 

var models = ['Key', 'Media'];

var sequelize = new Sequelize('mediadata', 'userly', 'qwerty', {	
	dialect: 'postgres'
});

models.forEach(function(model) {
	module.exports[model] = sequelize.import(__dirname + '/' + model);
});

sequelize.sync().then(function(complete) {
	console.log("COMEPLETED SYNCING", complete);
});
// (function(m) {
// 	m.Task.belongsTo(m.User);
// 	m.User.hasMany(m.Task);
// })(module.exports);

module.exports.sequelize = sequelize;