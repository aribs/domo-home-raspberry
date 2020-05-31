httplib = {
  get: async  function(url){
    var headers = new Headers();
    var myInit = { method: 'GET',
               headers: headers,
               mode: 'no-cors',
               cache: 'default' };
    var myRequest = new Request(url, myInit);
    let response = await fetch(myRequest);
    let data = await response.json();
    return data;
  },
  getExternal: async  function(url){
    var headers = new Headers();
    var myInit = { method: 'GET',
               headers: headers,
               mode: 'no-cors',
               cache: 'default' };
    var myRequest = new Request(url, myInit);
    let response = await fetch(myRequest);
    let data = await response;
    return data.body;
  }
}
