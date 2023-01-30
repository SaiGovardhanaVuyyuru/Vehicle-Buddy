require('dotenv').config({path:'environment.env'});

const { initialize } = require('./FilesStorageUtility/initialize');
const express=require('express');
const { vehicleCategoriesEndpoint } = require('./endpoints/vehicles/vehiclecategories');
const { injectUser } = require('./middleware/injectuser');
const { authenticateUserEndpoint } = require('./endpoints/users/Authencation');
const cookieParser = require('cookie-parser');
const { createUserEndPoint } = require('./endpoints/users/SignUp');
//Read the environment variables
//Initialize Folders
initialize();

let app=express();

app.use(express.static('static'));
app.use(express.json());
app.use(cookieParser());
app.use(injectUser);
//End point to get vehicle types
app.get('/vehicleCategories',vehicleCategoriesEndpoint);

app.post('/user/authenticate',authenticateUserEndpoint);

app.post('/user/createUser',createUserEndPoint);

app.listen(4292);