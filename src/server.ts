require('dotenv').config({path: __dirname + '/../.env'})

const cookieParser =  require('cookie-parser')
const express = require('express')
const cors = require('cors')
const app = express();

import routes from './routes'

app.use(cors());
app.use(cookieParser())
app.use(express.json());
app.use(routes)

app.listen(3200, ()=>{
    console.log('server no ar na porta 3200')
});