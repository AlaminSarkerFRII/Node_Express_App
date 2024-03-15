const express = require('express');
const app =express();
const usersRouter = require('./routes/users');

const port = process.env.PORT || 3000;

app.use(express.json)




// Mounting the users router

app.use('/users', usersRouter);


// Base routes

app.get('/', (req, res) => {
    res.send("Express Json Server")
})


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });


// ============= Server Running ======================>

app.listen(port, (req, res) => {

    console.log(`Express Server listening on ${port}`)

})