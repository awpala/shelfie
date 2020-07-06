require('dotenv').config();

const express = require('express'),
    ctrl = require('./controller'),
    massive = require('massive'),
    {SERVER_PORT, CONNECTION_STRING} = process.env,
    app = express();

app.use(express.json());

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('db connected');
});

// Endpoints
app.get('/api/inventory', ctrl.getInventory);
app.post('/api/product', ctrl.createProduct);
app.delete('/api/product/:id', ctrl.deleteProduct);


app.listen(SERVER_PORT, () => console.log(`Server is running on port ${SERVER_PORT}`));