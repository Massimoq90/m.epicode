const express = require('express');
const router = express.Router();
const cors = require('cors');


const userModel = require('../models/userModel');


router.post('/auth/register', async (req, res) =>{
const obj = req.body;
try{
    const newUser = userModel(obj);
    const userSave = await newUser.save();
    return res.status(201).json(userSave);
} catch (error) {
    return res.status(500).json({message: 'Problemi nella creazione di un utente', error: error})
}
})



router.post('/auth/login', (req, res) =>{

})


module.exports = router;