//creating a request var and assign it an object; to make an http request
var request = new XMLHttpRequest();

//open a connection specifiy http method and url endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

//access when request completes
request.onload = function() {

  // Begin accessing JSON data here; conver it into javascript objects
  var data = JSON.parse(this.response);

  //if no error log data 
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      console.log(movie.title);
    })
  } else {
    console.log('error');
  }
}

//send the request
request.send();