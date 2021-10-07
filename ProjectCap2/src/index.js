const path = require('path')
const express = require('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));



app.get('/home', (req, res) => {
  res.render('home');
})

app.get('/login', (req, res) => {
  res.render('login');
})

app.get('/register', (req, res) => {
  res.render('register');
})

app.get('/user', (req, res) => {
  res.render('user');
})

app.get('/profile', (req, res) => {
  res.render('profile');
})

app.get('/changepass', (req, res) => {
  res.render('changepass');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})