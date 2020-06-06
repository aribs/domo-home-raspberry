var express = require('express');
var router = express.Router();
var ledController = require('../controllers/led');
var temperatureController = require('../controllers/temperature');
var releController = require('../controllers/rele');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Controller' });
});
/*API ROUTES*/
router.get('/api/change-lights/:numberled/:statusled', ledController.led);
router.get('/api/get-temperature', temperatureController.get_temperature);
router.get('/api/get-exterior-data', temperatureController.get_exterior_data);
router.get('/api/change-rele/:number/:statusrele', releController.rele);
router.get('/api/save-interior-temperature', releController.rele);
router.get('/api/get-historic-interior-temperature', temperatureController.get_historic_temperature);
module.exports = router;
