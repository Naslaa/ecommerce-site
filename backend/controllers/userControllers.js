const router = require('express').Router();
const User = require('../models/userModels');
const jwt = require ('jsonwebtoken');
//bcrypt
const bcrypt=require("bcrypt");

// create a test route
router.get('/hello', (reg, res) => {
    res.send('welcomme to API ');
});


router.post('/register',async(req, res) => {
    console.log(req.body);
    // res.send('user registration');

    const { fname, lname, password, email } = req.body;

    if (!fname || !lname || !password || !email) {
        return res.status(400).json({ msg: "please enter all feilds" });
    }

    try {

        const existingUser = await User.findOne({ email });
        //checking existing user
        if (existingUser) {
            return res.status(400).json({ msg: "user already exist" });
        }

        //hash the password
        const salt = await bcrypt.genSaltSync(10);
        const passwordHash = await bcrypt.hashSync(password, salt);


        const newUser = new User({
            fname:fname,
            lname:lname,
            password:passwordHash,
            email:email
        });

        newUser.save();
        res.json("user registration success");

    } catch (error) {
        res.status(500).json("user registration failed");
    }


    // console.log{fname};
});

router.post('/login',async(req, res) => {
    console.log(req.body);

    //destructing
    const { email, password} = req.body;

    if ( !password || !email) {
        return res.status(400).json({ msg: "please enter all feilds" });
    }
    try{
        const user = await User.findOne({email});

        //check if user exists 
        if(!user){
            return res.status(400).json({msg:"user doesn't exit"});
        }

        //check if password is correct
        const isCorrectPassword = await bcrypt.compare(password,user.password)
        if(!isCorrectPassword){
            await res.status(400).json({msg: "invalid password"});
        }

        //creating a taken and signing it with jwt 
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            expire: new Date(Date.now() + 24*60*60*1000)
        });

        //Send user data
        res.json({
            token,
            user,
            msg: "user login success"
        });



    }catch(error){
        console.log(error);
    }
});

module.exports = router;