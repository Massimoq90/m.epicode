const express = require('express');
const router = express.Router();
const userModel = require('../models/users');

router.get("/home", (req, res) => {
    res.json({ message: 'Welcome' });
  })
  

const users = [
  { id:1,
    name: 'Mario',
    surname: 'Rossi',
    email: 'email',
    age: 20
  }
]

  router.get("/users",  (req, res) => {
    res.status(200).json(users);
  })
  
  
  router.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await userModel.findById(id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({message: 'Utente non trovato', error: error})
    }
  
  })
  
  router.post('/users', async (req, res) => {
    const obj = req.body;
    try{
        const newUser = userModel(obj);
        const userSave = await newUser.save();
        return res.status(201).json(userSave);
    } catch (error) {
        return res.status(500).json({message: 'Problemi nella creazione di un utente', error: error})
    }
  })
  
  router.put('/users/:id', async (req, res) => {
    const id = req.params.id;
    const obj = req.body;
    try {
        const editUser = await userModel.findByIdAndUpdate(id, obj);
        return res.status(200).json(editUser); 
    } catch (error) {
        return res.status(500).json({message: 'Problemi nella modifica di un utente', error: error})
    }
  })
  
  router.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await userModel.findByIdAndDelete(id);
        return res.status(200).json({message: 'remove item successfully'}); 
    } catch (error) {
        return res.status(500).json({message: 'Problemi nella rimozione di un utente', error: error})
    }
  })
  
  module.exports = router;