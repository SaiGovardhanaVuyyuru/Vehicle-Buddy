let fs=require('fs');
/**
 * Function to save user in json
 * @param {*} user 
 */
const {USERS_FOLDER}=process.env;
function saveUser(user)
{
    let users=JSON.parse(fs.readFileSync(USERS_FOLDER+'/users.json'));
    user["role"]="customer";
    users[user.email]=user;
    fs.writeFileSync(USERS_FOLDER+'/users.json',JSON.stringify(users));
    return true;
    
}

/**
 * 
 *Function to return boolean if user is present or not
 * @returns 
 */
function containsUser(user)
{
    let users=JSON.parse(fs.readFileSync(USERS_FOLDER+'/users.json'));
    
    if(user.email in users)
        return true;
    else
        return false;
}

function editUser(user)
{   
    let users=JSON.parse(fs.readFileSync(USERS_FOLDER+'/users.json'));

    if(user.email in users)
        {   
            saveUser(user);
            return true;
        }
    else
        return false;

}

function getUser(email)
{
    let users=JSON.parse(fs.readFileSync(USERS_FOLDER+'/users.json'));
    
    if(email in users)
        return users[email];
    else
        return null;   
    
}

function getUsers()
{
    return JSON.parse(fs.readFileSync(USERS_FOLDER+'/users.json'));
}
function authenticateUser(user)
{

    let actual=getUser(user.email);
    if(actual==null)
        return false;
    if(actual.password==user.password)
        return true;
    else
        return false;
}
exports.authenticateUser=authenticateUser;
exports.saveUser=saveUser;
exports.containsUser=containsUser;
exports.getUser=getUser;
exports.editUser=editUser;
exports.getUsers=getUsers
