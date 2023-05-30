const express = require('express');
const router = express.Router();
const cors = require('cors')

const { test, clienteUser, companyUser, loginUser, loginCompany, getUserProfile, getCompanyProfile } = require('../controllers/authController')

//middleware

router.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173'
  })
)

router.get('/', test)
router.post('/signupcliente', clienteUser)
router.post('/signupempresa', companyUser)
router.post('/signincliente' , loginUser)
router.post('/signinempresa', loginCompany)
router.post('/perfiluser', getUserProfile)
router.post('/perfiluser', getCompanyProfile)

module.exports = router