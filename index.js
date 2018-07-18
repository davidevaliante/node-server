const express = require('express');
const app = express();
const path = require('path');

const html = path.join(__dirname,'/index.html');

app.get('/', (req, res) => {
    res.send({'some_key':'some_value'})
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
