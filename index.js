const express = require('express');
const app =express();

const port = process.env.PORT || 3000;

app.use(express.json)


// Base routes

app.get('/', (req, res) => {

    res.send("Express Json Server")
})


app.listen(port, (req, res) => {

    console.log(`Express Server listening on ${port}`)

})