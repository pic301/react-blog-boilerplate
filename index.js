const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { User } = require('./models/user');

mongoose.connect("mongodb+srv://pic301:abcd1234@react-blog-boilerplate-tj7g4.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log(Error, err.message);
});
  
app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/api/users/register', (req,res)=>{
    const user = new User(req.body)
    user.save((err, userData)=>{
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})


app.listen(5000);