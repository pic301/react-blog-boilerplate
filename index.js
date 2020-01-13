const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://pic301:abcd1234@react-blog-boilerplate-tj7g4.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(Error, err.message);
});
  

app.get('/', (req,res) =>{
    res.send('hello world')
})


app.listen(5000);