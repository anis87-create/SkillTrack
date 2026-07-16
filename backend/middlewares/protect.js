const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(500).json({msg:'Unauthorized access!'})
    }

    
    const token = authHeader.split(' ')[1];
    
    try {
        const decoded = jwt.verify(token, process.env.SECRET_TOKEN);                
        req.user = decoded;
        next();
    } catch (error) {
        console.log('error');
        res.status(500).json({msg:'invalid token'})
    }
}

module.exports = protect;