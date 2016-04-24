var Sequelize = require('sequelize');
Sequelize.import('./bee.js');
var connection = new Sequelize('demodb', 'cestmoi', 'smartypass', {
	dialect: 'postgres'
});

var Bee = require("./Bee");
console.log("BEE IS", Bee);
// var Book = connection.define('book', {
// 	title: Sequelize.STRING
// });

// var Author = connection.define('author', {
// 	name: Sequelize.STRING
// });

// Book.belongsTo(Author);

var Article = connection.define('article', {
	title: Sequelize.STRING,
	body: Sequelize.TEXT
});

connection.sync().then(function() {
	Article.findAll().then(function(article){
		console.log("this is your article length", article.length);
	});
});

connection.sync().then(function() {
	Bee.create({
		serial: '1645A',
		description: 'Buzzzzz'
	});
});
// connection
// 	.sync({
// 		force: true,
// 		logging: console.log
// 	})
// 	.then(function() {

// 	})
// 	.catch(function (error) {
// 		console.log(error);
// });
// connection.sync().then(function() {
// 	Article.create({
// 		title: 'newentry',
// 		body: 'Lorem Ipsum Dim Sum Bacon Beer Can'
// 	});
// });

// connection.sync().then(function() {
// 	Article.findById(1).then(function(article){
// 		console.log(article.dataValues);
// 	});
// });