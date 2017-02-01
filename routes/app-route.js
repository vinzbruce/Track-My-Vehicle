var express = require('express');
var router = express.Router();
var path = require('path');

const jwt = require('express-jwt');

var distance = require('google-distance-matrix');



/*var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDKBkgQKUM4iwiL2oGFhxdT8rLjMYZN-EM'
});*/


// We are going to implement a JWT middleware that will ensure the validity of our token. We'll require each protected route to have a valid token sent in the Authorization header
const authCheck = jwt({
  secret: new Buffer('UwxgXdIKoDxRL4xFuUi_0HJWCeEgCKmx8ug_FbC01roS8-fyd_6pfMr1SQCg37Pe', 'base64'),
  audience: 'yvCQjHbzTeUFgxfMnxZrTQ91OfFswcMC'
});

router.get('/node', function(req, res){
  res.send("its node component");
});

router.get('/driver',  function(req, res){
  res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/user', function(req, res){
  res.sendFile(path.join(__dirname, '../index.html'));
});

router.get('/api/service/route', function(req, res){
  res.sendFile(path.join(__dirname, '../config/route/bus_stop.json'));
});

router.get('/api/service/distance', function(req, res){

 console.log(req.param('origins'));
 var origins = [];
 var destinations = [];

  origins.push(req.param('origins'));
  destinations.push(req.param('destinations'));

 distance.key('AIzaSyDKBkgQKUM4iwiL2oGFhxdT8rLjMYZN-EM');
 distance.mode('driving');

  distance.matrix(origins, destinations, function (err, distances) {

    if (err) {
        return console.log(err);
    }
    if(!distances) {
        return console.log('no distances');
    }
    if (distances.status == 'OK') {
         res.setHeader('Content-Type', 'application/json');
         res.send(JSON.stringify(distances.rows));
    }
  });

});



router.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '../index.html'));
});

module.exports = router;
