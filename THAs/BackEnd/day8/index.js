const express = require('express');

const app = express();

const bodyParser = require('body-parser');

//Express middleware class - class 8

//sequence matters for middlewares

//middleware is used to check/confirm if all the necessary conditions for the main function are completed.

const checkAdmin = (req, res, next) => { 

    //lets say the page with /test007 can only be accessed by the admin.
    // we can check this condition with if else. If admin, then next(), else error 404 
    if(req.query.admin === 'true') {
        next();
    } else {
        res.status(400).send('You are not admin of 007 files!!');
    }
    console.log('first'); 
}

const checkAuth = (req, res, next) => { 

    //lets say the page with /test007 can only be accessed by the admin.
    // we can check this condition with if else. If admin, then next(), else error 404 
    if(req.query.auth === 'asdfsrerfw651ve51') { // asdfsrerfw651ve51 is the auth key
        next();
    } else {
        res.status(401).send('You are not authorized to access 007 files!!'); //401 one is used for authentication failure
    }
    console.log('first'); 

    //if else should always be there. if should not be used solo.
}

const sendResponse = (req, res) => { //the next is used to go to the next fumctiom of this parameters
    res.status(200);
    res.json(req.query);
}

// app.use(checkAuth); //this will first run this funtion before everything in the full api.To check before every url in this case

app.use(express.urlencoded()); //used for express to handle the body of request. Get data in req.body. To handle form tag from front end and the action attribute of form tag
app.use(express.json({ extended: true })); //use to handle the json files from the body of front-end

//body parser as middleware, in use() to use in all the api file
//bodypareser deprcated
// new thing is express.json({ extended: true }); and express.urlencoded()


// remember this in every line
// security, performance, edge cases => everything is handled perfectly

// CRUD -> POST, GET, PUT, DELETE
const slash = (req, res) => {
    res.send('Hello'); //this is returned from this, i.e. hello. We can send anything that can be reuturned in js i.e., object, array, file, etc. This is very generic function, sends anything
}

app.get('/', sendResponse);

app.get('/test8', (req, res, next) => { //the next is used to go to the next fumctiom of this parameters
    console.log('first'); //before the main funciton does something, this cas act as component will mount in react
    next(); //This is called middleware, checks anything that has to be checked before the main funciton. 

}, (req, res) => { //the next is used to go to the next fumctiom of this parameters
    res.status(200);
    res.json(req.query);
});

app.get('/test007', sendResponse)

//for performance sake, the browser saves url data in cache, if not takes from server
//that is why we get 304 when we keep on refreshing the page after the first time of loading it.It caches all the get calls.
//This is to save load on the server and performance sake
//but there is a PROBLEM!!!!!!!!
//What if we send a password!! This'll save in cache and cache is easily accessible. So security issue
//So for sensitive data, we use app.post() function. post calls are not cached. More secure

//we send form data (also a post call) or raw data 90% of the times

//express cannot directly access post data as it comes in encrypted form. So cannot be directly converted into object
//for this we use npm package called body-parser

app.post('/', (req, res) => {
    console.log('req.body -> ', req.body);  
    res.json({ text: req.body })
})


app.listen(5001); //to listen to port as one server can process many websites so we need to specify the port we are listening to