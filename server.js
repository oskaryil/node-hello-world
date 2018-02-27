const express = require('express'),
	app = express(),
	port = process.env.PORT || 4000;

app.get('/', (req, res) => {
	res.send('Hello World! This works!');		
});

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});
