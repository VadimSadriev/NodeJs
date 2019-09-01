const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const todoRoutes = require('./routes/todo');
const path = require('path');


const PORT = process.env.PORT || 3000;

const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(todoRoutes);
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

async function start() {

    try {
        await mongoose.connect('mongodb+srv://Vadim:qwerty12345@cluster0-ceixz.mongodb.net/todos', {
            useNewUrlParser: true,
            useFindAndModify: false
        });

        app.listen(PORT, () => {
            console.log('server has been started');
        });
    } catch (e) {
        console.log(e);
    }
}

start();
