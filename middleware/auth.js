let success = true;

export const checkAuth = (req, res, next)=>{
    if(success){
        console.log("Auth checked");
        next();
    }
    else{
        console.log("Auth Failed");
        return res.status(400).json({
            message:"Auth failed"
        });
    }
}

export const validateUserId = (req, res, next)=>{
    const {id} =req.params;

    if(!id||id.length<5){
        return res.status(400).json({
            success:false,
            message:"Invalid User ID"

        });
    }
    next();
};

