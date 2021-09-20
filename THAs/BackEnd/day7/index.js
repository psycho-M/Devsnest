const express = require('express');

const app = express();

// remember this in every line
// security, performance, edge cases => everything is handled perfectly

// CRUD -> POST, GET, PUT, DELETE
const slash = (req, res) => {
    res.send('Hello'); //this is returned from this, i.e. hello. We can send anything that can be reuturned in js i.e., object, array, file, etc. This is very generic function, sends anything
}

const test = (req, res) => {
    // res.json({ a: 1 }); //sends only json. Used for specifity

    //res.sendStatus() is like res.send(), both are last thing in the flow, and behave like return.
    //To improve that we use res.status(), and then res.send()/res.json(), etc.

    res.status(200);
    res.send('database not connecting');
    // res.sendStatus(200); //200 means everything wend okay
    // res.sendStatus(201); //201 means updated successfully
    // res.sendStatus(400); //400 means error from front-end, i.e., error from client side
    // res.sendStatus(500); //500 means error from server side
    //when we send status, we send number and info. related to it
    // res.send(); // consider this as return statement, so this is last line to be executed. Anything after this is ignored

    // res.status(200).send('database not connecting'); //pipelining => one function after another
}

app.get('/', test, test, test); //in arguments we can pass any no. of funcitons as parameters

app.get('/products', (req, res) => {
    // req.query = {
    //     limit: 50, 
    //     q: 'something'
    // } //how it looks
    res.send(req.query); //whatever request comes, the response is sent back the same
})

//query params /products?limit=50&q=something
//for variables in query with '&' term, we use encodeURIComponenet(<data>) to get the suitable uri format for it, as whenever the browser is & it'll automatilcally go consider starting of a new variable

// app.get('/ab?cd', (req, res) => {
//     res.send('works on acd and abcd, question mark after b says that b is optional'); //works on acd and abcd, question mark after b says that b is optional
// })

// app.get('/ab+cd', (req, res) => {
//     res.send("works on abcd and any number of continous b's after this b, plus sign after b says that b is not optional and can come any number of times"); //works on abcd and any number of continous b's after this b, question mark after b says that b is not optional
// })

app.get('/ab*cd', (req, res) => {
    res.send('works on abcd and anything between ab and cd, star after b says that anything can come in between ab and cd and we still get the same output'); //works on abcd and anything between ab and cd, start after b says that anything can come in between ab and cd and we still get the same output
})

app.get('/ab(cd)?e', (req, res) => {
    res.send("works on abe and abcde, where (cd)? means cd is optional")
})

app.get(/a/, (req, res) => { //regex /a/, means anything after 'a' is valid, we get the same output
    res.send("regex /a/, means anything after 'a' is valid, we get the same output");
})

app.get(/.*fly$/, (req, res) => {
    res.send('/.*fly$/ is regex for anything that ends with fly');
})

app.get('/user/:userId/books/:bookId', (req, res) => {
    //res.send(':userId and :bookId are dynamic, /users and /books is constant. This is a mixture of static and dynamic route names');
    res.send(req.params); //saved in req.params
    console.log(req.query);
})




// app.get('/', slash);
// app.post('/', slash);
// app.put('/', slash);
// app.delete('/', slash);

app.listen(5000); //to listen to port as one server can process many websites so we need to specify the port we are listening to