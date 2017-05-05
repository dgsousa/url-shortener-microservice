const http = require("http");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 3000;
const index = fs.readFileSync(path.join(__dirname, "../public/index.html"), {"encoding" : "utf8"});
// const urlRegex = /\/new\/http+s?\:\/\/(www\.)?[^\.]*\.(com|org|net|gov)$/i;
// const mongoose = require("mongoose");



// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/url", function(err) {
// 	if(err) {
// 		console.log("There was an error connecting to the database");
// 	} else {
// 		console.log("Successfully connected to the database");
// 	}
// })

const server = http.createServer((req, res) => {
	homeRoute(req, res);
	// shortRoute(req, res);
	// urlRoute(req, res);
}).listen(port);
console.log("The server is listening on port ", port);



// const urlSchema = mongoose.Schema({
// 	idNumber: Number,
// 	original_url: String,
// 	short_url: String
// });

// const Url = mongoose.model("URL", urlSchema);


const homeRoute = (req, res) => {
	if(req.url == "/" && req.method == "GET") {
		res.writeHead(200, {"Content-type": "text/html"});
		res.write(index);
		res.end();
	}
}

// const urlRoute = (req, res) => {
// 	if(urlRegex.test(req.url)) {
// 		const random = Math.floor((Math.random() * 8999) + 1000);
// 		const url = new Url({
// 			idNumber: random,
// 			original_url: req.url.slice(5),
// 			short_url: `https://url-shortener-danielsousa.herokuapp.com/${random}`
// 		});
// 		url.save();
// 		const urlObject = {
// 			original_url: req.url.slice(5),
// 			short_url: `https://url-shortener-danielsousa.herokuapp.com/${random}`
// 		};
// 		res.writeHead(200, {"Content-type": "text/html"});
// 		res.write(JSON.stringify(urlObject));
// 		res.end();	
// 	} else if(req.url.startsWith("/new/")) {
// 		res.writeHead(200, {"Content-type": "text/html"});
// 		res.write(JSON.stringify({"error": "Wrong url format, make sure you have a valid protocol and real site."}));
// 		res.end();
// 	}
// }


// const shortRoute = (req, res) => {
// 	if(parseInt(req.url.slice(1)) && req.url.length == 5) {
// 		Url.find({idNumber: req.url.slice(1)}, function(err, urls) {
// 			if(err) {
// 				res.writeHead(200, {"Content-type": "text/html"});
// 				res.write(JSON.stringify({error: "This url is not in the database"}));
// 				res.end();
// 			} else {
// 				res.writeHead(303, {Location: urls[0].original_url});
// 				res.end();
// 			}
// 		})
// 	}
// }



// process.on("SIGTERM", function() {
// 	db.close();
// })








