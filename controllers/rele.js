var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var rele1 = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
var rele2 = new Gpio(17, 'out'); //use GPIO pin 17, and specify that it is output
exports.rele = function (req, res){
  if(req.params.statusrele === 'on')  var releAction = 0;
  if(req.params.statusrele === 'off')  var releAction = 1;
  if(req.params.number === '1') rele1.writeSync(releAction);
  else if(req.params.number === '2') rele2.writeSync(releAction);
  else  res.status(400).send('not found rele')
  res.status(200).send('change status ok')
}