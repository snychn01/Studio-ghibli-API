//getting root element of DOM
const app = document.getElementById('root');

//creating new container element
const container = document.createElement('div');
//assign it a class name
container.setAttribute('class', 'container');


const logo = document.createElement('img');

logo.src = 'logo.png';
//placing it on the root dom element
app.appendChild(logo);

app.appendChild(container);

//creating a request var and assign it an object; to make an http request
var request = new XMLHttpRequest();

//open a connection s qpecifiy http method and url endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

//access when request completes
request.onload = function() {

  // Begin accessing JSON data here; conver it into javascript objects
  var data = JSON.parse(this.response);

  //if no error log data 
  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = movie.title;

      const p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;	

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    
    })
  } 

  else {
 	const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Gah, it's not working!`
    app.appendChild(errorMessage)
   }
}

//send the request
request.send();