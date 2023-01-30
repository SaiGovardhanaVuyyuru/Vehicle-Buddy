let fs=require('fs');
let {USERS_FOLDER,VEHICLES_FOLDER}=process.env;
/**
 *Initialize  files to create folders.
 */
console.log(USERS_FOLDER)

let staticCategories={
    "SUV":
    {
        "category-description":"Reach your destinations with ease. Choose from various modes Of transport that satisfy your needs.",
        "category-icon":"fa-cab",   
        "category-name":"SUV",
        "category-img":"./assets/img/bus.jpg",
        "category-details-image":"./assets/img/cab.jpg",
        "category-details-title":"SUV's very biggggu",
        "category-details-description":"SUV's very biggggu SUV's very biggggu SUV's very biggggu SUV's very biggggu SUV's very biggggu"
    },
    "Sedan":
    {   
        "category-description":"Reach your destinations with ease. Choose from various modes Of transport that satisfy your needs.",
        "category-icon":"fa-bus",   
        "category-name":"Sedan",
        "category-img":"./assets/img/bus.jpg",
        "category-details-image":"./assets/img/cab.jpg",
        "category-details-title":"SUV's very biggggu",
        "category-details-description":"SUV's very biggggu SUV's very biggggu SUV's very biggggu SUV's very biggggu SUV's very biggggu"    },

};

function initialize()
{
    if(!fs.existsSync(USERS_FOLDER))
    {   fs.mkdirSync(USERS_FOLDER,{recursive:true});
        fs.writeFileSync(USERS_FOLDER+'/users.json',`{"admin@admin.com":{"email":"admin@admin.com","name":"Admin","password":"1234","role":"admin"}}`);
        console.log("Created User Folder And JSON");
    }
    if(!fs.existsSync(USERS_FOLDER+'/users.json'))
    {
        fs.writeFileSync(USERS_FOLDER+'/users.json',`{"admin@admin.com":{"email":"admin@admin.com","name":"Admin","password":"1234","role":"admin"}}`);
        console.log("Created Users.json");
    }
    
    if(!fs.existsSync(VEHICLES_FOLDER))
    {   fs.mkdirSync(VEHICLES_FOLDER);
        fs.writeFileSync(VEHICLES_FOLDER+'/vehiclecategories.json',JSON.stringify(staticCategories));
        console.log("Created Category Folder And JSON");
    }
    if(!fs.existsSync(VEHICLES_FOLDER+'/vehiclecategories.json'))
    {
        fs.writeFileSync(VEHICLES_FOLDER+'/vehiclecategories.json',JSON.stringify(staticCategories));
        console.log("Created Category.json");
    }
    
}
exports.initialize=initialize;