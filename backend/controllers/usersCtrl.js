const { asyncHandler } = require("../utils/asyncHandler");
const UserService = require('../models/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports.register = asyncHandler(async (req, res, next) => {
    const { name, email, password, confirmedPassword } = req.body;
    const errors={}
   if(!name){
      errors.name='Le nom est obligatoire.';
   } 
   if(!password){
      errors.password = 'Le mot de passe est obligatoire'
   }else if(password.length < 8) {
      errors.password = 'Le mot de passe doit au moins contenir 8 caractères';
   }
   if(!email){
      errors.email = 'L\'email est obligaotire';
   }else if(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email) === false){
      errors.email='le format de l\'email est invalid';
   }

   if(password !==confirmedPassword){
      errors.confirmedPassword = 'Les deux mots de passes ne sont pas identiques'
   }
 
   const user = await UserService.getUserByEmail(email);

   if(user) {
      errors.email = 'cet email existe déja'
   }
   if(Object.keys(errors).length > 0){
     return res.status(400).json({errors});
   }
   const hashPassword = await bcrypt.hash(password, 10);
   const token = generateToken(email);
   const createdUser = await UserService.register(name, email, hashPassword);
   res.status(201).json({msg:'User created', user: createdUser, token});
});


module.exports.login = asyncHandler(async (req, res, next) => {
   const { email, password } = req.body;

   const user = await UserService.getUserByEmail(email);
   
   if(!user || !email || !password) {
      return res.status(409).json({msg:'Email et/ou mot de passe incorrect(s)!'})
   }
   
   const token = generateToken(email);
   
   const isMatch = await bcrypt.compare(password, user.password);
   if(!isMatch){
     return res.status(409).json({msg:'Email et/ou mot de passe incorrect(s)!'})
   }
   return res.status(200).json({msg:'Login successefuly',user ,token});
});

module.exports.authMe = asyncHandler( async(req, res, next) => {   
   const user = await UserService.getUserByEmail(req.user.email);
   if(!user){
      return res.status(400).json({msg:'user not exist'});
   }
   return res.status(200).json({user});
});

const generateToken = (email) => {
   return jwt.sign({email},
    process.env.SECRET_TOKEN,
    {expiresIn:'30d'}
   )
}
