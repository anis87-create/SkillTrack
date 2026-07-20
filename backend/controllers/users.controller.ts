
import type {Error} from "../types/users/Error";
import type {CreateUserDto} from "../types/users/CreateUserDto";
import type { Request, Response, NextFunction } from 'express';
const { pool } = require('../config/db');
import UserRepository = require("../repositories/UserRepository");



const { asyncHandler } = require("../middlewares/asyncHandler");
import UserService = require("../services/userService");
import type {User} from "../models/User";
const bcrypt = require('bcrypt');
const { generateToken } = require("../helpers");

const userService = new UserService(new UserRepository(pool));
module.exports.register = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
   console.log('resgister');
   
    const { full_name , email, password, confirmedPassword } = req.body as CreateUserDto;
    const errors={} as Error;
    console.log(req.body);
    
   if(!full_name){
      errors.full_name='Name is required.';
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

   const user = await userService.findByEmail(email);

   if(user) {
      errors.email = 'This email already exists'
   }
   if(Object.keys(errors).length > 0){
     return res.status(400).json({errors});
   }
   const hashPassword = await bcrypt.hash(password, 10);
   const createdUser = await userService.register({ full_name, email, password: hashPassword, confirmedPassword } as CreateUserDto);
   const token = generateToken(createdUser.id);
   const { password_hash, ...safeUser } = createdUser as User;
   res.status(201).json({msg:'User created', user: safeUser, token});
});


module.exports.login = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
   const { email, password } = req.body;

   const user = await userService.findByEmail(email);
   
   if(!user || !email || !password) {
      return res.status(409).json({msg:'Incorrect email and/or password!'})
   }
   
   const token = generateToken(user?.id);
   
   const isMatch = await bcrypt.compare(password, user.password_hash);
   if(!isMatch){
     return res.status(409).json({msg:'Incorrect email and/or password!'})
   }
   const { password_hash, ...safeUser } = user as User;
   return res.status(200).json({msg:'Login successefuly', user: safeUser, token});
});

module.exports.authMe = asyncHandler( async(req: Request, res: Response, next: NextFunction) => {
   if(!req.user){
      return res.status(400).json({msg:'user not found'})
   }
   const user = await  userService.findById(req.user.id);

   if(!user){
      return res.status(400).json({msg:'user not exist'});
   }
   const { password_hash, ...safeUser } = user as User;
   return res.status(200).json(safeUser);
});
