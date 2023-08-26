const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const router = express.Router()


router.get('/Blog', function (req, res) {
  res.render('BlogPage',{name:"blog"})
  });
router.get('/newPost',async (req,res)=>{
  res.render('AddPost',{name:"register"})
})
router.get('/Dashboard',async (req,res)=>{
  res.render('Dashboard',{name:"blog"})
})
router.get('/',async(req,res)=>{
  res.render('SignIn',{'name':'register'})
})
  module.exports = router;
