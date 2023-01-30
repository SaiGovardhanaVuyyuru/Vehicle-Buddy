const { saveUser, getUser, authenticateUser } = require("../../FilesStorageUtility/user");

/**
 * Endpoint Function for Editing User
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
function editUserEndpoint(req,res)
{
    let email=req.params.email;

    //No cookie exit
    if(req.cookies.userCredentials == undefined)
    {
        res.json({"success":false,"message":"Not Authorized","toast-class":"bg-danger"});
        return;
    
    }
    
    if(email==undefined)
        email=JSON.parse(req.cookies.userCredentials)["email"];
    //Cookie and param dont match
    if(JSON.parse(req.cookies.userCredentials)["email"]!=email)
        {
            res.json({"success":false,"message":"Not Authorized","toast-class":"bg-danger"});
            return ;
        }

    //Check if cookie correct
    if(authenticateUser(JSON.parse(req.cookies.userCredentials)))
    {   let existingUser=getUser(JSON.parse(req.cookies.userCredentials)["email"]);

        for(let [k,v] of Object.entries(req.body))
        {
            existingUser[k]=v;
        }
        saveUser(existingUser);
        res.json({"success":true,"message":"Succesfully Updated Profile","toast-class":"bg-success",data:getUser(email)});
        return;
    }
    else
    {   res.json({"success":false,"message":"Not Authorized","toast-class":"bg-danger"});
        return ;
    }
}

exports.editUserEndpoint=editUserEndpoint;