var sensor = require("node-dht-sensor");
const https = require('https');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'my_home_asisstant',
  insecureAuth : true
});

exports.get_temperature = function (req,res) {
  sensor.read(11, 27, function(err, temperature, humidity) {
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
exports.get_exterior_data = function (req, res) {
  var url = 'https://api.darksky.net/forecast/542f611761769e690dcda585aa4fb53d/40.2963710,-3.4494456?lang=ES&units=auto';
  https.get(url, (resp) => {
  let data = '';
  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    console.log('end')
   res.status(200).send(mount_external_data_response(data));
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
}
exports.get_historic_temperature = function (req, res){
  connection.connect((err) => {
    if(!err)
        console.log('Database is connected!');
    else
        console.log('Database not connected! : '+ JSON.stringify(err, undefined,2));
    });
  connection.query('SELECT * FROM interior_data', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
}

//Aux functions
function mount_external_data_response (data){
  data = JSON.parse(data);
  var response = {
    temperature:                data.temperature,
    precipitation_intensity:    data.currently.precipIntensity,
    precipitation_probability:  data.currently.precipProbability,
    temperature:                data.currently.temperature,
    humidity:                   data.currently.humidity,
    windspeed:                  data.currently.windSpeed,
    icon:                       data.currently.icon
  };
  return response;
}