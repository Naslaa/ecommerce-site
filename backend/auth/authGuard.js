const jwt = require("jsonwebtoken");

const authGuard=(req, res, next)=>{
    const authHeader= req.headers.authorization;


    if(!authHeader){
        return res.status(401).json({error:"authorization header not found"});

    }

    const token= authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({error:" no header token found"});
    }

    try{
        const decodedUser= jwt.verify(token, process.env.JWT_SECRET);

        req.User= decodedUser;
        next();
    }catch (error){
        console.log(error);
        res.status(401).json({error:"invalide token"});
    
    }


};
module.exports= authGuard;