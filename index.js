const express = require('express');
const cors = require('cors');
require('dotenv').config()

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.get('/',(req,res)=>{
    res.send('Hello from In-Need');
})

app.listen(port,()=>{
    console.log('listening from ',port);
})

// inNeed
// tWMqaOikbuajJo9Y