const express = require('express')
const app = express()

app.use( ( req, res, next ) => {
    console.log('middleware ran');
    next();
})

app.use( ( req, res, next ) => {
    console.log('middleware ran, again');
    next();
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/god', (req, res, next) => {
    // res.send("This is god's domain");
    return next( new Error('something went wrong!'))

})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(3000)