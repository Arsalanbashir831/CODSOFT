const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const router = express.Router();
const User = require('../models/UserModal');
const Post = require('../models/PostModal');
const fs = require('fs');

router.post('/addPost', async (req, res) => {
   
  if (req.session.userId === undefined || req.session.userId === "") {
    return res.redirect('/');
  }
  try {
    const { title, category, desc, picture } = req.body;
    const userId = req.session.userId; 
    const latestPost = await Post.findOne().sort({ PostId: -1 });
    let newId = 1;
    
    if (latestPost) {
      newId = latestPost.PostId + 1;
    }
   
    if (req.files && req.files.picture) {
      const picture = req.files.picture;
      let fname =`${newId}_${req.files.picture.name}`;
      picture.mv("./uploads/" + fname, (err) => {
        if (err) {
          console.error('Error moving File:', err);
        } else {
          console.log('File moved successfully');
        }
      });
    }
    const newPost = new Post({
      PostId: newId,
      UserId: userId,
      PostTitle: title,
      CategoryId: category,
      PostDesc: desc,
      Picture: `${newId}_${req.files.picture.name}`
    });
    
    
    const savedPost = await newPost.save();
    res.json(savedPost); // Corrected from savedUser to savedPost
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
