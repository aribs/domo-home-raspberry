//Get Room Status
httplib.get('/api/get-temperature')
  .then(data => paint_room_status(data))
function paint_room_status(data){
  var temperature_container = dom.allByClass('temperature')[0];
  temperature_container.innerHTML ='Temperatura:' +  data.temperature + '°C';
  var humidity_container = dom.allByClass('humidity')[0];
  humidity_container.innerHTML = 'Humedad relativa: ' +  data.humidity + '%';
}
//Get External Status
httplib.get('/api/get-exterior-data')
  .then(data => paint_external_status(data))
function paint_external_status(data){
  var external_temperature = dom.allByClass('external_temperature')[0];
  external_temperature.innerHTML ='Temperatura: ' + data.temperature + ' ºC';
  var external_humidity = dom.allByClass('external_humidity')[0];
  external_humidity.innerHTML = 'Humedad: ' +  data.humidity + ' %';
  var external_windspeed = dom.allByClass('external_windspeed')[0];
  external_windspeed.innerHTML ='Velocidad Viento: ' +  data.windspeed + ' km/h';
  var precipitation_probability = dom.allByClass('precipitation_probability')[0];
  precipitation_probability.innerHTML ='Probabilidad  precipitación: ' +  data.precipitation_probability + ' %';
  var precipitation_intensity = dom.allByClass('precipitation_intensity')[0];
  precipitation_intensity.innerHTML ='Intensidad precipitación: ' + data.precipitation_intensity;
  paint_weather(data.icon)
}
function paint_weather (weather){
  var label_container = dom.allByClass('exterior_title_show_weather')[0];
  switch (weather){
    case 'clear-day': 
      var element = document.createElement('i');
      dom.addClass(element, 'fas');
      dom.addClass(element, 'fa-sun');
      label_container.appendChild(element);
    break;
    case 'clear-night': 
      var element = document.createElement('i');
      dom.addClass(element, 'fas');
      dom.addClass(element, 'fa-moon');
      label_container.appendChild(element);
    break;
    case 'rain': 
      var element = document.createElement('i');
      dom.addClass(element, 'fas');
      dom.addClass(element, 'fa-umbrella');
      label_container.appendChild(element);
    break;
    case 'snow': 
      var element = document.createElement('i');
      dom.addClass(element, 'fas');
      dom.addClass(element, 'fa-snowflake');
      label_container.appendChild(element);
    break;
    case 'sleet': 
      var element = document.createElement('i');
      dom.addClass(element, 'fas');
      dom.addClass(element, 'fa-stroopwafel');
      label_container.appendChild(element);
    break;
    case 'wind': 
      var element = document.createElement('i');
      dom.addClass(element, 'fas');
      dom.addClass(element, 'fa-wind');
      label_container.appendChild(element);
    break;
    case 'fog': 
      var element = document.createElement('i');
      dom.addClass(element, 'fas');
      dom.addClass(element, 'fa-smog');
      label_container.appendChild(element);
    break;
    case 'cloudy': 
      var element = document.createElement('i');
      dom.addClass(element, 'fas');
      dom.addClass(element, 'fa-cloud-sun');
      label_container.appendChild(element);
    break;
    case 'partly-cloudy-day': 
      var element = document.createElement('i');
      dom.addClass(element, 'fas');
      dom.addClass(element, 'fa-cloud-sun');
      label_container.appendChild(element);
    break;
    case 'partly-cloudy-night': 
      var element = document.createElement('i');
      dom.addClass(element, 'fas');
      dom.addClass(element, 'fa-cloud-moon');
      label_container.appendChild(element);
    break
  }
}

//Add handler to controller buttons
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
//Hour
paint_hour_date();
function paint_hour_date (){
  now = new Date()
  var hour = now.getHours();
  var minute = now.getMinutes();
  if(minute < 10) minute = '0' + minute;
  var actual_hour = hour + ':' + minute;
  var hour_container = dom.allByClass('text_hour')[0];
  hour_container.innerHTML = actual_hour;

  moment.locale('es');
  var actual_date = moment().format('D MMMM  YYYY');
  var date_container = dom.allByClass('text_date')[0];
  date_container.innerHTML = actual_date;
  var t = setTimeout(paint_hour_date, 500);
}
