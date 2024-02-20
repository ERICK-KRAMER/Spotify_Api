const Route = require("express").Router();
const controller = require("../src/controller/controllerRequests");

Route.get('/musica/:name', controller.GetTokenMusic);
  
Route.get('/v1/tracks/:id' , controller.GetTraksInformation);
  
Route.get('/artist/:artistId', controller.GetInformationArtist);

Route.get("/", controller.getToke);


module.exports = Route;