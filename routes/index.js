var express = require('express');
var router = express.Router();
var ledController = require('../controllers/led');
var temperatureController = require('../controllers/temperature');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*API ROUTES*/
router.get('/api/change-lights/:numberled/:statusled', ledController.led);
router.get('/api/get-temperature', temperatureController.get_temperature);
module.exports = router;
