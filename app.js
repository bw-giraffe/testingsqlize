var Sequelize = require('sequelize');

var connection = new Sequelize('demodb', 'cestmoi', 'smartypass', {
	dialect: 'postgres'
});

var Article = connection.define('article', {
	title: Sequelize.STRING,
	body: Sequelize.TEXT
});

connection.sync();

// connection.sync().then(function() {
// 	Article.create({
// 		title: 'newentry',
// 		body: 'Lorem Ipsum Dim Sum Bacon Beer Can'
// 	});
// });

connection.sync().then(function() {
	Article.findById(1).then(function(article){
		console.log(article.dataValues);
	});
});