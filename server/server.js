const express = require('express');

var app = express();

const port = process.env.PORT || 3000;

app.get('/', (req,res,next) => {
	res.status(200).send({
		error: 'Page not found.',
		name: 'Todo App v1.0'
	});
});

app.get('/users', (req,res,next) => {
	res.status(200).send([{
		name: 'Avinash',
		age: 25
	},{
		name: 'Gaurav',
		age: 26
	}]);
});

app.listen(port, () => {
	console.log(`Server up on port no : ${port}`);
});

module.exports.app = app;