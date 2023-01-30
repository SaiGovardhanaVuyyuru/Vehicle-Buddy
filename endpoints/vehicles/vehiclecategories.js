const { getVehicleCategories } = require("../../FilesStorageUtility/vehicle");

/**
 * This function returns the categories of cars.
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
async function vehicleCategoriesEndpoint(req,res)
{
    let data=await getVehicleCategories();
    console.log(res.locals.user)
    res.json({data:data,user:res.locals.user,success:true,redirect:false,message:"Fetched the data"});
}

exports.vehicleCategoriesEndpoint=vehicleCategoriesEndpoint;