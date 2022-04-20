const express = require('express');
var cors = require('cors');// this line need when connect react app 
const app = express();
const port = process.env.PORT || 5000;

app.use(cors()) // and this line also
app.use(express.json());// post to backend site that's why this line needed.

app.get('/',(req, res)=>{
    res.send("Hello World in Soumik's and her wife's life")
})


//create dynamic api -- number : 1
const users = [
    {id:1, name:'Soumik', email:'soumick5555gmail.com',phone:1234567890},
    {id:2, name:'Sourav', email:'sourav9999gmail.com',phone:1234567890},
    {id:3, name:'Souvik', email:'souvik5555gmail.com',phone:1234567890},
    {id:4, name:'Shiba', email:'shiba5555gmail.com',phone:1234567890},
    {id:5, name:'Sujay', email:'sujay1111gmail.com',phone:1234567890},
    {id:6, name:'Sandip', email:'sandip3333gmail.com',phone:1234567890},
]
/*
 this is firstly write but query parameter এর জন্য 2nd বার লেখা হয়েছে অর্থাৎ কোড change হয়েছে । that's why this is committed.

// there can see all object//
app.get('/users', (req, res)=>{
    console.log(req.query)
    res.send(users)
});
*/

//Second Time Write//
// there can see all object//
app.get('/users', (req, res)=>{
    //filter by search query parameter
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }
    else{
        res.send(users)
    }
});

//there can see only one that i will see by id because there have user/:id
app.get('/user/:id',(req,res)=>{
     console.log(req.params)
    const id =( req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user);
    
});

//when post data to server
app.post('/user',(req, res) => {
    console.log('request',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})


// This is important
app.listen(port, ()=>{
    console.log('Listening to port,', port)
})

// For Example like users
app.get('/fruits',(req, res) => {
    res.send(['banana','jackfruit','apple','guava'])
});

