const express = require('express');
const morgan = require('morgan');
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

// MIDDLEWARE
// Logging requests
app.use((req, res, next) => {
	console.log(`new request made:`);
	console.log(`host:`, req.hostname);
	console.log(`path:`, req.path);
	console.log(`method`, req.method);
	next();
});

// Second request to route via Morgan, authentication
app.use(morgan('dev'));

// Serve CSS
app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/about', (req, res, next) => {
	res.render('about');
});
app.get('/contact-me', (req, res) => {
	res.render('contact-me');
});

app.get('/blogs/create', (req, res) => {
	res.render('create', {
		name: 'No Name',
		number: '0',
		letter: ' ',
	});
});
app.get('/blogs/create/new', (req, res) => {
	const { name, number, letter } = req.query;
	res.render('create', {
		name,
		number,
		letter,
	});
});

// Middleware
app.use((req, res) => {
	res.render('404');
});
