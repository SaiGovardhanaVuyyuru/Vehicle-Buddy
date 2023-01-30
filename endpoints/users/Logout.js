
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
function logoutEndPoint(req,res)
{
   if(req.cookies.userCredentials!=null)
    {   let user=JSON.parse(req.cookies.userCredentials);
        res.clearCookie('userCredentials');
        res.json({success:true,"message":`Logging Out ${user.name}`,"toast-class":"bg-success"});
    }
    else
        {
            res.json({success:false,"message":"Couldn't Find user","toast-class":"bg-danger"});
        }
}

exports.logoutEndPoint=logoutEndPoint;