var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LEDGreen = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
var LEDRed = new Gpio(17, 'out'); //use GPIO pin 17, and specify that it is output
exports.led = function (req, res){
  console.log(req.params)
  if(req.params.statusled === 'on')  var ledAction = 1;
  if(req.params.statusled === 'off')  var ledAction = 0;
  if(req.params.numberled === 'green') LEDGreen.writeSync(ledAction);
  else if(req.params.numberled === 'red') LEDRed.writeSync(ledAction);
  res.status(200).send('endpoint ok')
};