const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const exportedData = require ('./config/database');
const path = require('path'); 
const link = path.join(__dirname, 'pages');

//sending request to the home page http://localhost:5000/
app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'pages', 'index.html'));
    res.sendFile(path.join(link, 'index.html'));
})

app.get('/admin', (req, res) => {
  res.send('Admin Page')
})

app.get('/user', (req, res) => {
  // res.send('User Page')
  res.sendFile(path.join(link, 'user.html'));
})

// starting express server
app.listen(port,(req, res,err) => {
  if (err)
  throw err;
  console.log(`Server is running in port ${port}`)
})