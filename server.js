const express = require('express');
const app = express();

const exphbs = require('express-handlebars')
const BudgetRouter = require('./src/routes/budgets.js')
const router = require('./public/routes.js')

app.use(
    express.urlencoded({extended:true})
);

//setting engine and views
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.set('views', './public/views');

//deploying static
app.use(express.static("public"));

//setting routers
app.use('/', router)
app.use('/budgets/', BudgetRouter)


app.listen(3000, ()=>{
    console.log("o servidor está online na porta 3000")
}); 