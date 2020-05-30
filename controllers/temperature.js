var sensor = require("node-dht-sensor");

exports.get_temperature = function (req,res) {
  console.log('enter function')
  sensor.read(11, 27, function(err, temperature, humidity) {
    console.log('enter here')
    if(err)console.log(err);
    if (!err) {
      var response = {
        "humidity": humidity,
        "temperature": temperature
      }
      res.status(200).send(response);
    }
  });
}