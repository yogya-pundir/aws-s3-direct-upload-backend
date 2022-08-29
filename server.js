const express = require('express');
const cors = require('cors');
const route = require('./routes/routes');
const app = express();

app.use(cors({
origin : '*'
}))

app.use('/s3Url',route);

app.listen('8000',()=>{
    console.log('server connected at 8000');
})