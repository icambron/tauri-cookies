const http = require("http")
const fs = require("fs")

const host = "localhost";
const port = 8000;


const requestListener = (req, res) => {
	if (req.url == "/setCookies") {
		setCookies(res)
	} else if (req.url == "/readCookies") {
		showCookies(req, res)
	} else {
		res.writeHead(400)
		res.end("Unknown path")
	}
}

const setCookies = (res) => {
	res.writeHead(302, {
		"Set-Cookie": ["myCoolCookie=foo;SameSite=None;Secure"],
		"Location": "/readCookies"
	});
	res.end()
}

const showCookies = (req, res) => {
	const cookies = req.headers?.cookie
	res.writeHead(200)
	res.end(cookies ? JSON.stringify(cookies) : "No cookies found")
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

