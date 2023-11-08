const http = require('http')

http.createServer((req, res) => {
	const {method} = req;
	if(method.toLowerCase() === 'get') {
		res.statusCode = 200
		return res.end()
	}

	const chunks = []
	req.on('data', (chunk) => {
		chunks.push(chunk)
	})
	.on('end', () => {
		res.statusCode = 200
		return res.end(Buffer.concat(chunks).toString());
	})
})
.listen(5001, () => {
	console.log('started server at localhost:5001')
});

