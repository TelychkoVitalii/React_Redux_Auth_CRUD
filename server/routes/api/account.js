const express = require('express'),
      router = express.Router();

// User Register Model
const UserRegister = require('../../models/UserRegister');

// @route GET request
router.get('/register', (req, res) => {
  UserRegister.find()
    .then(user => res.json(user))
});

// @route POST request
router.post('/register', (req, res) => {
  let { body } = req, { firstname, lastname, email, password } = body;
  console.log(firstname, lastname, email, password);
  if(!firstname) return res.send({ success: false, message: 'Error: First Name cannot be blank' });
  if(!lastname) return res.send({ success: false, message: 'Error: Last Name cannot be blank' });
  if(!email) return res.send({ success: false, message: 'Error: Email cannot be blank' });
  if(!password) return res.send({ success: false, message: 'Error: Password cannot be blank' });

  email = email.toLowerCase();
  email = email.trim();

  UserRegister.find({ email })
    .then(previousUser => {
      if(previousUser.length > 0) {
        return res.send({ success: false, message: 'Error: Account already exist' })
      }
    }).catch(() => res.send({ success: false, message: 'Error: Server error' }));

  // Save User
  const newUser = new UserRegister();
  newUser.firstName = firstname;
  newUser.lastName = lastname;
  newUser.email = email;
  newUser.password = newUser.generateHash(password);
  newUser.save()
    .then(() => res.send({ success: true, message: 'User registration has been successful!', token: newUser.password }))
    .catch(() => res.send({ success: false, message: 'Error: Server error' }))
});

// @route DELETE request
router.delete('/register', (req, res) => {
  UserRegister.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(error => res.status(404).json({ success: false }))
});

module.exports = router;