const express = require('express');
const exphbs = require('express-handlebars')

const app = express();

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static("public"));

app.set('views', './views');

const router = require('./routes')
app.use('/', router)


app.use(
    express.urlencoded({extended:true})
);


app.listen(3000, ()=>{
    console.log("o servidor está online na porta 3000")
}); 