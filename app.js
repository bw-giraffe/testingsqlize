var models = require('./models');
var Media = models.Media;
var Key = models.Key;

console.log("GOT YOUR USER RIGHT HERE: ", Media);
console.log("GOT YOUR TASK RIGHT HERE: ", Key);


// var task = Key.create({name: "a"});

Key.findById(1).then(function(key) {
	console.log("Key found", key);
});
// User.findById(1).then(function(user){
// 	console.log(user);
// });sss