const express = require('express')
const cors = require('cors')
const app = express();

import routes from './routes'

app.use(cors());
app.use(express.json());
console.log('server no ar')
app.use(routes)
app.listen(3200);