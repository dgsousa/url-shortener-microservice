const http = require("http");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 3000;
const index = fs.readFileSync(path.join(__dirname, "../public/index.html"), {"encoding" : "utf8"});
const urlRegex = /\/new\/http+s?\:\/\/(www\.)?[^\.]*\.(com|org|net|gov)$/i;

const server = http.createServer((req, res) => {
	homeRoute(req, res);
	urlRoute(req, res);
}).listen(port);
console.log("The server is listening on port ", port);


const homeRoute = (req, res) => {
	if(req.url == "/" && req.method == "GET") {
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(index);
		res.end();
	}
}

const urlRoute = (req, res) => {
	if(urlRegex.test(req.url)) {
		const random = Math.floor((Math.random() * 8999) + 1000)
		const urlObject = {
			"original_url": req.url.slice(5),
			"short_url": `https://url-shortener-danielsousa.herokuapp.com/${random}`
		}
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(JSON.stringify(urlObject));
		res.end();
	}
}










