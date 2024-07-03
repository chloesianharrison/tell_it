const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

const salt = bcrypt.genSaltSync(10);
const secret = "jnacnjn"

app.use(cors({credentials:true,origin:'http://localhost:3000'}))
app.use(express.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://chloesianharrison:wh56dQbFBmMe9pLx@cluster0.4i7i9a9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
;
app.post('/signup', async (req, res) => {
  const {name,email,password} = req.body;
  try {
    const userDoc = await User.create({
      name,
      email,
      password:bcrypt.hashSync(password,salt),
    })
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(e)
  }
});

app.post('/login', async (req, res) => {
  const {name,email, password} = req.body;
  const userDoc = await User.findOne({email})
  const passOk = bcrypt.compareSync(password, userDoc.password)
  if (passOk){
    // logged in
    jwt.sign({email,id:userDoc._id}, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie('token', token).json({
        id:userDoc._id,
        name,
      });
    })
  } else {
    res.status(400).json('Wrong credentials')
  }

})

app.get('/profile', (req, res) => {
  const {token} = req.cookies;
  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info)
  })
})

app.post('/logout', (req,res) => {
  res.cookie('token','').json("ok")
})

app.listen(4000);
