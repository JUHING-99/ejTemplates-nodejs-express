const express = require('express');
const rutas = express.Router();

const controllerHome = require("../controllers/controller_home");
const controllerAbout= require("../controllers/controller_about");
const controllerContact = require("../controllers/controller_contact");
const controllerLocation = require("../controllers/controller_location");
const controllerMission = require("../controllers/controller_mission");




rutas.get('/', controllerHome.getHome);
rutas.get('/about', controllerAbout.getAbout);
rutas.get('/contact', controllerContact.getContact);
rutas.get('/location', controllerLocation.getLocation);
rutas.get('/mission', controllerMission.getMission);

module.exports = rutas