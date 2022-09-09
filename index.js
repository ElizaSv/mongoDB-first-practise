const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
const port = 3002;
const User=require('./userModel');

mongoose.connect(process.env.MONGO_URL)
  .then(()=>console.log('connected'))
  .catch(err=>console.log(err));    

app.post('/create', (req, res) => {
    const user = new User(req.body);
    user.save()
    .then(() => res.status(201).send("New user has been created"))
    .catch ((error)=> res.status(405).send(error))
  })

app.listen(port, ()=>console.log(`You are listening to port ${port}!`))


