const express = require('express');

const App = express();

App.get('/', (req, res) => res.json({hello: 'Hello World!'}));

app.listen(8877);
