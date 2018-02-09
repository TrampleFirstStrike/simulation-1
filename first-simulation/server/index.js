
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const bins_controller = require("./Controller/bins_controller");

massive(process.env.CONNECTION_STRING).then
(dbInstance => app.set("db", dbInstance));


const app = express();

app.use( bodyParser.json() );
app.use( cors() );


app.get('/api/test', bins_controller.test);


//app.get('/api/bins_controller/:id)

const port = process.env.PORT || 3001
app.listen(port, () => { console.log(`Server listening on port ${port}`) } );