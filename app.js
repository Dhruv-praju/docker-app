const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.json('Welcome to Docker express demo !')
})

app.listen(8000, ()=>{
    console.log('Server Started...');
    console.log('Listening on port 8000');
})