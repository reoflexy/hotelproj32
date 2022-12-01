//// process JSON data
function processJSON(json){
	console.log(json);
	const response = document.querySelector('#response');
	const p = document.createElement('p');
	p.innerHTML = ' Server response: <br>' + json.name + ' <br> ' + json.email
	p.className = 'red';
	response.appendChild(p);
};

function onError(error){
	console.log(error);
};

///// process server response with JSON
function onResponse(response){
	console.log(response);
	return response.json();
};


//// JSON message
const message ={
	name: 'Jeannette Chin',
	email: 'j.chin@uea.ac.uk'
};

///// serialsed JSON object into string
const serializedMessage = JSON.stringify(message);
console.log(serializedMessage );

///// send fetch call
fetch('http://localhost:3000/hello', {  method: 'POST',  
				  headers: {
      			  	'Content-Type': 'application/json'
				  },
				  body:serializedMessage
			   }
		)
		.then(onResponse, onError)
        .then(processJSON);