const express = require('express');
const { fetchCompaniesbyInitials} = require('../controller/companies');

const router = express.Router();
//  /users is already added in base path
router.get('/companies', fetchCompaniesbyInitials)
      

exports.router = router