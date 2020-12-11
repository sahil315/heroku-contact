const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;

const app  =  express();

//Tell exxpress that ejs is our template engine
app.set('view engine' ,'ejs');
app.set('views', path.join(__dirname , 'views'));

//parser 
app.use(express.urlencoded({extended: true }));
//static files
app.use(express.static('assets'));


var contactList = [
    {
        name : "Sahil",
        Phone : "8890579860"
    },
    {
        name: "Messi",
        Phone : "12345678"
    },
    {
        name : "Ronaldo",
        Phone : "67890123"
    }

]



//controller for home.ejs
app.get('/' , function(req, res){
    
    return res.render('home' , { 
        title:"My Contact list",
        contact_list : contactList
        
    });
});

//controller for practice.ejs
app.get('/practice' , function(req, res){
    return res.render('practice');
});


app.listen(port , function(err){
    if(err){
        console.log('server is not running' ,err);
    }

    console.log('Server is up');

});

//FORM 
app.post('/create-contact', function(req, res){
    // contactList.push({
    //     name:req.body.name,
    //     Phone:req.body.Phone

    // }); Longer version 

    contactList.push(req.body);
    return res.redirect('/');

});
