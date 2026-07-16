const jwt = require('jsonwebtoken');
module.exports.generateToken = (id) => {
    const secret = process.env.SECRET_TOKEN || !process.env.JWT_TOKEN;
    
    if(!secret){
        throw new Error('JWT secret is not configured.');
    }

    
    return jwt.sign({id}, secret, {expiresIn:'30d',  algorithm: 'HS256',});
}