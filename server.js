const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const exphbs = require('express-handlebars')
const budgetRouter = require('./src/routes/budgets.js')
const userRouter = require('./src/routes/users.js')
const router = require('./public/routes.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//setting engine and views
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.set('views', './public/views');

//deploying static
app.use(express.static("public"));

//setting routers
app.use('/', router)
app.use('/budgets/', budgetRouter)
app.use('/users/', userRouter)

app.listen(3000, ()=>{
    console.log("o servidor está online na porta 3000")
}); 