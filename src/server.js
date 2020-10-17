const express= require('express');
const app = express();
const fs = require('fs');
const routes = require('./routes')
const cors = require('cors')
require('./database')

app.use(cors())
app.use(express.json())
app.use(routes) 
app.listen(process.env.PORT || 3333);