// business.route.js

const express = require('express');
const router = express.Router();

// Require Business model in our routes module
const Person = require('./person');
const Login = require('./login');

//  get all person
router.get( "/", async ( req, res, next) => {
  try {
    const people = await Person.find().lean();
    res.json( people);
  } catch( err) {
    next( err)
  }
});
//  get all login
router.get( "/auth", async ( req, res, next) => {
  try {
    const login = await Login.find().lean();
    res.json( login);
  } catch( err) {
    next( err)
  }
});

//  insert data
router.post( "/", async ( req, res, next) => {
  try {
    const person = new Person( req.body);
    await person.save();
    res.json( person);
  } catch( err) {
    next( err)
  }
});

module.exports = router;