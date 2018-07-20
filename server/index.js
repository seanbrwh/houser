require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const massive = require('massive');
const {SERVER_PORT,CONNECTION_STRING} = process.env;


app.use(bodyParser.json());

app.listen(SERVER_PORT, ()=>{
    console.log(`Listening on Port: ${SERVER_PORT}`);
})

app.get('/api/houses',(req,res,next)=>{
    const db = req.app.get('db');
    db.house_list().then(result =>{
        res.status(200).send([...result])
    })
})
app.post('/api/houses',(req,res,next)=>{
    const {name, address, city, state,zipcode} = req.body
    const db = req.app.set('db');
    db.add_house([name,address,city,state,zipcode]).then(result =>{
        res.sendStatus(200);
    })
})
app.delete('/api/houses/:id',(req,res,next)=>{
    const {id} = req.params;
    const db = req.app.set('db');
    db.del_house(id).then(results=>{
        res.sendStatus(200);
    }).catch(err=> console.log(err))
})

// app.post('/api/houses/:id',(req,res,next)=>{
//     const {id} = req.query;
//     const {name, address, city, state, zipcode} = req.body;


// })


massive(CONNECTION_STRING).then(connection =>{
    app.set('db',connection)
    console.log('WORKS');
})