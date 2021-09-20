const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const path = require('path'); //path is inbuilt in express and used to concatenate the current directory and the where we want to go as why not?

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); //jade is a view engine which renders html



//Express middleware class - sending static files - class 9

app.use('/', (req, res) => {
    // console.log(path.join(__dirname, 'public/hello.txt'));
    // res.sendFile(path.join(__dirname, 'public/my-precious.jpeg'), 'my Precious'); //used for showing the file data on the browser. The type of document displayed on the browser is same as the local file
    // res.download(path.join(__dirname, 'public/my-precious.jpeg'), 'my Precious.jpeg');
    // res.render('index', {title: "Express"}); //renders whatever is passsed in the first parameter which is takes from the the path set before and uses vies engine specified aboove. The second parameters passes an object, which is accessed in the jade document wherever needed

    res
    .status(201)
    .cookie('toke', 'test', {
        expire: new Date(Date.now() + 8 * 3600000)
    })
    .cookie('hello', 'hello')
    .redirect(301, '/admin');

})

app.listen(5002); //to listen to port as one server can process many websites so we need to specify the port we are listening to