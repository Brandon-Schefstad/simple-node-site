const express = require('express');

const app = express();

// PORT
app.listen(3000);

// Declare View Enginer
app.set('view engine', 'ejs');

// Sample html route
// app.get('/', (req, res) => {
// 	const path = __dirname + '/views/index.html';
// 	res.sendFile(path); // Optional 2nd param of { root: __dirname}
// });

// redirect
// app.get('/about-us', (req, res) => {
// 	res.redirect('/about');
// });

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/about', (req, res) => {
	res.render('about');
});
app.get('/contact-me', (req, res) => {
	res.render('contact-me');
});

app.get('/blogs/create', (req, res) => {
	res.render('create');
});
app.get('/blogs/create/new', (req, res) => {
	const { name, number, letter } = req.query;
	console.log(name);
	console.log(number);
	console.log(letter);
	res.render('create', {
		number,
		name,
		letter,
	});
});

// Middleware
app.use((req, res) => {
	res.render('404');
});
