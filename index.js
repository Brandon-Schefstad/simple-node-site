const http = require('http');
const fs = require('fs');
const hostname = 'localhost';
const port = 3001;

const startPath = '/Users/bsche/onedrive/desktop/2nd brain/projects/nodeJS';

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);
	res.statusCode = 200;
	// Essential Set Header Content Type
	res.setHeader('Content-Type', 'text/html');
	function fetchPage(fileName) {
		fs.readFile(
			startPath + `/simpleNodeSite/views/${fileName}.html`,
			(err, data) => {
				if (err) {
					console.error(err);
					res.end();
				} else {
					res.write(data);
					res.end();
				}
			}
		);
	}
	switch (req.url) {
		case '/':
			fetchPage('index');
			break;
		case '/about':
			fetchPage('about');
			break;
		case '/contact-me':
			fetchPage('contact-me');
			break;
		default:
			fetchPage('404');
			break;
	}
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
