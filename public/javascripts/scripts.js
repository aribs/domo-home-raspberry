//Get Room Status
httplib.get('/api/get-temperature')
  .then(data => paint_room_status(data))
function paint_room_status(data){
  var temperature_container = dom.allByClass('temperature')[0];
  temperature_container.innerHTML ='Temperatura actual ' +  data.temperature + '°C';
  var humidity_container = dom.allByClass('humidity')[0];
  humidity_container.innerHTML = 'Humedad relativa ' +  data.humidity + '%';
}
//Get External Status
httplib.getExternal('https://api.darksky.net/forecast/542f611761769e690dcda585aa4fb53d/40.2963710,-3.4494456')
  .then(data => paint_external_status(data))
function paint_external_status(data){
  console.log(data)
}
var button1Off = dom.allByClass('btn1_off')[0];
dom.addHandler(button1Off, 'click', function(){
  httplib.get('/api/change-rele/1/off')
  .then(console.log('of light'))
})
var button1Off = dom.allByClass('btn1_on')[0];
dom.addHandler(button1Off, 'click', function(){
  httplib.get('/api/change-rele/1/on')
  .then(console.log('of light'))
})
