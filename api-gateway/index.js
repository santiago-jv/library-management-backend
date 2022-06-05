const express = require('express');
const server = express();
require('dotenv').config()
const cors = require('cors');
const indexRouter = require('./src/routes/indexRouter');

server.use(express.json())
server.use(cors({
    origin:process.env.CORS_ORIGIN_URL
}))

server.use('/api', indexRouter)
server.listen(process.env.PORT || 8080);