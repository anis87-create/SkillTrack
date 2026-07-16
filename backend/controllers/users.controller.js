const { asyncHandler } = require("../middlewares/asyncHandler");
const UserService = require('../repositories/auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { generateToken } = require("../helpers");

module.exports.register = asyncHandler(async (req, res, next) => {
    const { name, email, password, confirmedPassword } = req.body;
    const errors={}
   if(!name){
      errors.name='Name is required.';
   }
   if(!password){
      errors.password = 'Password is required'
   }else if(password.length < 8) {
      errors.password = 'Password must contain at least 8 characters';
   }
   if(!email){
      errors.email = 'Email is required';
   }else if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) === false){
      errors.email='Invalid email format';
   }

   if(password !==confirmedPassword){
      errors.confirmedPassword = 'The two passwords do not match'
   }

   const user = await UserService.getUserByEmail(email);

   if(user) {
      errors.email = 'This email already exists'
   }
   if(Object.keys(errors).length > 0){
     return res.status(400).json({errors});
   }
   const hashPassword = await bcrypt.hash(password, 10);
   const token = generateToken(user?.id);
   const createdUser = await UserService.register(name, email, hashPassword);
   res.status(201).json({msg:'User created', user: createdUser, token});
});


module.exports.login = asyncHandler(async (req, res, next) => {
   const { email, password } = req.body;

   const user = await UserService.getUserByEmail(email);
   
   if(!user || !email || !password) {
      return res.status(409).json({msg:'Incorrect email and/or password!'})
   }
   
   const token = generateToken(user?.id);
   
   const isMatch = await bcrypt.compare(password,  user ? user.password : authRepository.DUMMY_HASH);
   if(!isMatch){
     return res.status(409).json({msg:'Incorrect email and/or password!'})
   }
   return res.status(200).json({msg:'Login successefuly',user ,token});
});

module.exports.authMe = asyncHandler( async(req, res, next) => {   
   const user = await UserService.getUserById(req.user.id);

   
   if(!user){
      return res.status(400).json({msg:'user not exist'});
   }
   return res.status(200).json(user);
});
