const express = require('express')
const mongoose=require('mongoose')
const path = require('path')
require('dotenv').config();


const app = express()
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'uploads')));

// routers 
const indexRouter = require('./routes/Home')
const authRouter = require('./routes/Authentication')
const postRouter = require('./routes/Post')

// use Routers
app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/post',postRouter)

const DB_URL=process.env.DB_URL
const PORT = process.env.PORT

mongoose.connect(DB_URL)
.then(()=>{
  console.log("connected to MongoDB");
  app.listen(PORT,()=>{
    console.log("Server Running at "+PORT);
  })
})
.catch(()=>{
  console.error("Failed to connect");
})