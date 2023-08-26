const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const router = express.Router();
const User = require('../models/UserModal')


// Define a route to handle user registration
router.post('/registerUser', async (req, res) => {
    try {
      const latestUser = await User.findOne().sort({ userId: -1 });
      let newId = 1; 
      if (latestUser) {
        newId = latestUser.userId + 1;
      }
      if(req.body.password === req.body.confirmPassword){
      
      const newUser = new User({
        userId: newId,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      const savedUser = await newUser.save();
      res.json(savedUser); 
    }else{
        // if password and confirm password doesnt match !! need to improve by giving alerts in frontend 
        console.log('Doesnt Match Password');
    }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  router.post('/signInUser', async (req, res) => {
    try {
      const { username, email, password } = req.body;  
      // Find the user based on username, email, and password
      const user = await User.findOne({
        $or: [{ username }, { email }],
        password,
      });
      if (user) {
        req.session.userId= user.userId;
      res.redirect('/Blog')
      } else {
        res.status(401).json({ error: 'Invalid credentials' }); 
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
module.exports=router