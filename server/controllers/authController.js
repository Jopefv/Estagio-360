const User = require('../models/user');
const Company = require('../models/company');
const { hashPassword, comparePassword, hashPasswordCom, comparePasswordCom } = require('../helpers/auth')
const jwt = require('jsonwebtoken')


const test = (req, res) => {
  res.json('Test is working')
}

//Registers Endpoint
const  clienteUser = async (req, res) =>{
    try {
      const {name , email, password, dateOfBirth, address, phone} = req.body;
      //Checking if name was entered
      const existNome = await User.findOne({name});
      if(existNome) {
        return res.json({
          error: 'NameId is already take, create another one'
        })
      };
    //Cheking if password is good
    if(!password || password.length < 6){
      return res.json({
        error: 'Password is required and must be at least 6 characters long'
      })
    }; 
    //Cheking if email is good
    const exist = await User.findOne({email});
    if(exist) {
      return res.json({
        error: 'Email is already taken, choose another one'
      })
    };
    // Checking if date was entered
    if (!dateOfBirth) {
      return res.json({
        error: 'Date of birth is required'
      });
    };

    // Checking if andrees was entered
    if (!address) {
      return res.json({
        error: 'Address is required'
      });
    };

    // Checking if phone was entered
    if (!phone) {
      return res.json({
        error: 'Phone number is required'
      });
    };

    const hashedPassword = await hashPassword(password)
    //Create user in database
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
        dateOfBirth,
        address,
        phone
      });

      return res.json(user)
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
}

const  companyUser = async (req, res) =>{
  try {
    const {namecom , emailcom, passwordcom, cnpj, addresscom, phonecom} = req.body;
    //Checking if name was entered
    const existName = await Company.findOne({namecom});
    if(existName) {
      return res.json({
        error: 'NameId is already take, create another one'
      })
    };
    //Cheking if password is good
    if(!passwordcom || passwordcom.length < 6){
      return res.json({
        error: 'Password is required and must be at least 6 characters long'
      })
    }; 
    //Cheking if email is good
    const exist = await Company.findOne({emailcom});
    if(exist) {
      return res.json({
        error: 'Email is already take, choose another one'
      })
    };
    // Checking if cnpj was entered
    if (!cnpj) {
      return res.json({
        error: 'Cnpj is required'
      });
    };

    // Checking if andrees was entered
    if (!addresscom) {
      return res.json({
        error: 'Address is required'
      });
    };

    // Checking if phone was entered
    if (!phonecom) {
      return res.json({
        error: 'Phone number is required'
      });
    };

    const hashedPassawordCom = await hashPasswordCom(passwordcom)
    //Create user in database
    const company = await Company.create({
      namecom, 
      emailcom, 
      passwordcom: hashedPassawordCom, 
      cnpj, 
      addresscom, 
      phonecom
    })
      return res.json(company)
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

//Login Endpoint
const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;
    
    //Check if user exist
    const user = await User.findOne({email})
    if(!user){
      return res.json({
        error: 'No user founded'
      })
    }

    //Check if password match
    const match = await comparePassword(password, user.password)
    if(match){
     jwt.sign({email: user.email, id: user._id, name: user.name}, process.env.JWT_SECRET, {}, (err, token) => {
      if(err) throw err;
      res.cookie('token', token).json(user)
     })
    }
    if(!match) {
      res.json({
        error: 'Password dont match'
      })
    }
  } catch (error) {
    console.log(error)
  }
}

const loginCompany = async (req, res) => {
  try {
    const {emailcom, passwordcom} = req.body;

    //Check if user exist
    const company = await Company.findOne({emailcom})
    if(!company){
      return res.json({
        error: 'No user founded'
      })
    }

    //Check if password match
    const matchCom = await comparePasswordCom(passwordcom, company.password)
    if(matchCom){
      jwt.sign({emailcom: company.emailcom, id: company._id, namecom: company.name}, process.env.JWT_SECRET, {}, (err, token) => {
      if(err) throw err;
      res.cookie('token', token).json(company)
     })
    }
    if(!matchCom) {
      res.json({
        error: 'Password dont match'
      })
    }
  } catch (error) {
    console.log(error)
  }
}

const getUserProfile = (req, res) => {
  const {token} = req.cookies
  if(token){
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if(err) throw err;
      res.json(user)
    })
  }else{
    res.json(null)
  }
}

const getCompanyProfile = (req, res) => {
  const {token} = req.cookies
  if(token){
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, company) => {
      if(err) throw err;
      res.json(company)
    })
  }else{
    res.json(null)
  }
}


module.exports = {
  test,
  clienteUser,
  companyUser,
  loginUser,
  loginCompany,
  getUserProfile,
  getCompanyProfile
}