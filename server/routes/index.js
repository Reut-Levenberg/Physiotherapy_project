let express = require('express');
const router = express.Router();

const {
    login,
    addPatient
  } = require('../controllers/index.js');
  router.post('/login',login);
  router.post('/addPatient',addPatient);

  module.exports = router;