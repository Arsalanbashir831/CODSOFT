const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const router = express.Router();
const User = require('../models/UserModal')
const Post = require('../models/PostModal')

router.post('/addPost',async(req,res)=>{
  try {
    const data = req.body;
    // console.log(data);
    

  } catch (error) {
    console.log(err);
  }

})


module.exports=router