const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const router = express.Router()


router.get('/', function (req, res) {
  res.render('SignIn',{name:"register"})
  });

  module.exports = router;