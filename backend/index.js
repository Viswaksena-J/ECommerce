const port = 4000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { error } = require('console');

app.use(express.json());
app.use(cors());

// Database connection with mongoDB

// mongoose.connect('mongodb://newuser:007007007>@ac-rkohcfs-shard-00-00.fgw10rp.mongodb.net:27017,ac-rkohcfs-shard-00-01.fgw10rp.mongodb.net:27017,ac-rkohcfs-shard-00-02.fgw10rp.mongodb.net:27017/?replicaSet=atlas-eflkp6-shard-0&ssl=true&authSource=admin')
mongoose.connect("mongodb://user:87654321@ac-ithgikq-shard-00-00.rf1a7xy.mongodb.net:27017,ac-ithgikq-shard-00-01.rf1a7xy.mongodb.net:27017,ac-ithgikq-shard-00-02.rf1a7xy.mongodb.net:27017/?ssl=true&replicaSet=atlas-12xcc4-shard-0&authSource=admin&retryWrites=true&w=majority")

//API Creation

app.get('/',(req,res) => {
    res.send('Express API is running')
})

//Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

//Schema for creating products

const upload = multer({storage:storage})

//Creating Upload endpoint for images
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'),(req,res) => {
    res.json({
        success:1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    })
})

app.listen(port,(error) => {
    if(!error){
        console.log(`Server is running on port `+ port)
    }
    else{
    console.log('Error while connecting to server:' + error)
    }
})