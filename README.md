# NodeJS Express Api to control Raspberry Pi  GPIO
 ## Endpoints
 - **/api/change-lights/** params /name-light and /status, example /api/change-lights/red/on
 - **/api/get-temperature** no params, get temperature and humidity from the room. Returns in JSON

 ## Run api
 ** DEBUG=myapp:* npm start** 
 App runs in port 3000