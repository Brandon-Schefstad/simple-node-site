const http = require('http');
const fs = require('fs');
const hostname = '0.0.0.0';
const port = 300;

/* Reusable function to serve a specific file in views. 
		@PARAMS: fileName - Name of the file
		@PARAMS: res - response object from createServer()*/

function fetchPage(fileName, res) {
	//
	fs.readFile(`./views/${fileName}.html`, (err, data) => {
		if (err) {
			console.error(err);
			res.end();
		} else {
			// res.write(data);
			res.end(data);
		}
	});
}

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	// Essential Set Header Content Type
	res.setHeader('Content-Type', 'text/html');

	switch (req.url) {
		case '/':
			fetchPage('index', res);
			break;
		case '/about':
			fetchPage('about', res);
			break;
		case '/contact-me':
			fetchPage('contact-me', res);
			break;
		default:
			fetchPage('404', res);
			break;
	}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
