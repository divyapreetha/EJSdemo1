const express = require('express');
const res = require('express/lib/response');
const app = express();
console.dir(app);

app.listen(3000, () => {
	console.log('Example app listening at http://localhost: port 3000');
});

app.get('/cats', (req, res) => {
	console.log('Cat Request!');
});

//Query String
//Search Result when no Query String is mentioned
app.get('/search', (req, res) => {
	const { q } = req.query;
	if (!q) {
		res.send('NOTHING FOUND');
	}
	res.send(`<h1> Search Result for ${q} </h1>`);
});

//Getting pattern for paths
app.get('/r/:subreddit', (req, res) => {
	console.log(req.params);
	res.send('A subreddit');
	const { sub } = req.params;
});

//Comments
app.get('/r/:subreddit/comments/:postID', (req, res) => {
	console.log(req.params);
	const { subreddit, postID } = req.params;
	res.send(`${subreddit} has ${postID}`);
});

// Home Route
app.get('/', (req, res) => {
	res.send('This is the home page');
});

// Generic Response - for paths that never exist
app.get('*', (req, res) => {
	res.send("I don't know");
});

app.post('/', (req, res) => {
	res.send('POST - Meow');
});
