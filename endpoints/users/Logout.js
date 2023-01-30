
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
        res.json({success:true,"message":`Logging out bro! Bye :( `,"toast-class":"bg-success"});
    }
    else
        {
            res.json({success:false,"message":"Session Expired","toast-class":"bg-danger"});
        }
}

exports.logoutEndPoint=logoutEndPoint;