const express = require('express');
const productCtrl = require('./controller');
const app = express();

app.use(express.json());

// TO-DO: Endpoints

const portNumber = 5050;
app.listen(portNumber, () => console.log(`Server is running on port ${portNumber}`));