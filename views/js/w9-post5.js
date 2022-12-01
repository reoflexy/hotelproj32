//// process JSON data
function onTextReady(text){
	console.log(text);
	const response = document.querySelector('#response');
	const p = document.createElement('p');
	p.innerHTML = ' Server response: <br>' + text ;
	p.className = 'red';
	response.appendChild(p);
};

function onResponse(response){	
	console.log(response)
	return response.text();
}

function onError(error){
	console.log('Error : ' + error);
}

//// JSON message
const message ={
	name: 'Jeannette Chin',
	email: 'j.chin@uea.ac.uk'
};

///// serialsed JSON object into string
const serializedMessage = JSON.stringify(message);
console.log(serializedMessage );

fetch('http://localhost:3000/hello', {  method: 'POST',  
				   headers: {
      			  	'Content-Type': 'application/json'
				   },
				   body:serializedMessage
			   }
		)
		.then(onResponse, onError)
        .then(onTextReady);