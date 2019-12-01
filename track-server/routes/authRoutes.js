const express = require('express');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/signup', async (req,res) => {
    const { email , password } = req.body;
    try{
        const user = new User({email, password});
        await user.save();
        console.log(user._id);
        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
        console.log(token);
        res.send({ token });
    }
    catch (err) {
        return res.status(422).send(err.message);
    }
    
});

router.post('/signin', async (req,res) => {  
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(422).send({ error: 'Muts bring email and password' });
    }


    const user = await User.findOne({ email });
    if(!user){
        return res.status(422).send({ error: 'Invalid password or email' });
    }
    try {
        await user.comparePassword(password);
        const usid = user._id;
        const token = jwt.sign({ usid } , 'MY_SECRET-KEY' );
        res.send({ token });
    }
    catch (err) {
        return res.status(422).send({ error: 'Invalid password or email' });
    }
});

module.exports = router;