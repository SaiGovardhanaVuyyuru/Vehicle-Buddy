const {readFile,writeFile}=require('fs/promises');
let {USER_FOLDER,VEHICLES_FOLDER}=process.env;
async function getVehicleCategories()
{
    let data=await readFile(VEHICLES_FOLDER+'/vehiclecategories.json','utf-8');
    
    return JSON.parse(data); 
    
}




module.exports={getVehicleCategories};