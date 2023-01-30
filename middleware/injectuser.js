
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {*} next 
 */
async function injectUser(req,res,next)
{   if(req.cookies.userCredentials!=null)
        {   let {email,name,password,role}=JSON.parse(req.cookies.userCredentials);
            res.locals.user={"email":email,"name":name,"password":password};
        }
    next();
}

exports.injectUser=injectUser;