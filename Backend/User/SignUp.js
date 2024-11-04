const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const mongodb = 'mongodb://localhost:27017/JobHuntPro';

const app = express();
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

//data base connection
mongoose.connect(mongodb)
    .then(() => console.log('connect successfull'))
    .catch((err) => console.log(err))

app.listen(3000, () => {
    console.log('server is running');
});



// Create products schema
const SignUpSchema = new
    mongoose.Schema({
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    })
const user = mongoose.model('User', SignUpSchema);


app.post('/jobhuntpro/user/signin', async (req,res) => {
    try {
        const { name, email, password } = req.body;
        const newSignUp = new user({
            name,
            email,
            password,
        })


        await newSignUp.save();
        res.status(201).json({message:'User create successfully', User:newSignUp});
    }
    catch (err) {
        res.status(500).json({message:'SignUp Faild.'});
    }
})

app.post('/jobhuntpro/user/login',async(req,res)=>{
    try{
        const {email , password} = req.body;
        const matchdata= await user.findOne({email});
        console.log(matchdata);
        if(!matchdata){res.status(404).json({message:'User not found'})};
        (matchdata.password==password)?res.status(201).json({message:'longIn successfully'}):res.status(500).json({message:'wrong Password'})

    }
    catch{

    }
})