const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();

app.use(compression());
const staticPath = path.join(__dirname);

app.use('/static', express.static(staticPath));
app.use('/', express.static(staticPath));

app.get('*', (req, res) => {
	res.sendFile(path.join(staticPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', (err) => {
	if (err) {
		console.error(err);
	}
    
	console.info(`==> 🌎 app listening on http://localhost:${PORT}.`);
});
