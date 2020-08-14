const path = require('path');
const express = require('express');
// const morgan = require('morgan');
const { response, request } = require('express');
const exphbs  = require('express-handlebars');
const app = express();


app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
// app.use(morgan('combined'))

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//template engine
app.engine('hbs', exphbs({
    extname : '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.listen(3000, () => {
    console.log("app listen 300000000")
})
app.get("/", (request, response) => {
    console.log(request.query.author)
    response.render('search');
})

app.post("/home", (request, response) => {
    console.log(request.body)
    response.send('');
})
