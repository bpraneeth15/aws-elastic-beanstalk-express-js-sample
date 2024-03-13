const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World!My name is praneeth, Im a software developer, i will get a job'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
