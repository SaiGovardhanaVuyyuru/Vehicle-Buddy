const { getUser, saveUser } = require("../../FilesStorageUtility/user");

/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return true;
  }
    
    return false;
}
/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @returns 
 */
function createUserEndPoint(req,res)
{   
    let {email,name,password}=req.body;
    
    if(email==undefined||name==undefined||password==undefined)
        {
            res.json({'success':false,'toast-class':'bg-danger','message':"Missing Fields."});
            return ;
        }
    let user=getUser(email);
    if(user == null)
        {   
            if(!ValidateEmail(email))
                {
                    res.json({'success':false,'toast-class':'bg-danger','message':"Invalid email."});
                    return;
                }
            if(name.length<3)
            {
                res.json({'success':false,'toast-class':'bg-danger','message':"Invalid username requires min. 4 characters"});
                return;
            }
            if(password.length<4)
                {   
                    res.json({'success':false,'toast-class':'bg-danger','message':"Invalid password requires min. 4 characters"});
                    return;
                }   

            saveUser(req.body);

            res.cookie("userCredentials",JSON.stringify({email:email,name:name,password:password}));
            
            res.json({'success':true,'toast-class':'bg-success','message':"Successfully signed up","data":{role:"customer",email:email,password:password,name:name}});
            
        }
    else
        {
            res.json({'success':false,'toast-class':'bg-danger','message':"Already user present with given email."});
        }
}

exports.createUserEndPoint=createUserEndPoint;