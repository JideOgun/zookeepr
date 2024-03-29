const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes/');
const htmlRoutes = require('./routes/htmlRoutes/');


const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


// middleware that instructs the server to make certain files readily available and to not gate it behind a server endpoint
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);







app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});


const { animals } = require('./data/animals');




