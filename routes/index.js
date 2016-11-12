var express = require('express');
var jwt = require('jsonwebtoken');
var jwtSecret = require('../lib/jwt').jwtSecret;

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  var token = jwt.sign({
    username: 'test',
    email: 'test@gmail.com'
  }, jwtSecret, {
      expiresIn: '60000'
    });
  res.send(token);
});

router.get('/validation', function (req, res) {
  var token = req.get('Authorization');
  jwt.verify(token, jwtSecret, function (err, decoded) {
    if (err) {
      res.send(err);
    } else {
      res.send('Jwt validation succsess').status(200);
    }
  });
});

module.exports = router;
