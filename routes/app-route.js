var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/node', function(req, res){  
  res.send("its node component");  
});

router.get('/driver', function(req, res){
  res.sendFile(path.join(__dirname, '../index.html'));  
});

router.get('/user', function(req, res){
  res.sendFile(path.join(__dirname, '../index.html'));  
});

router.get('*', function(req, res){
  res.sendFile(path.join(__dirname, '../index.html'));  
});
  
module.exports = router;

