function onTextReady(text){
	console.log(text);
}

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

fetch('http://localhost:3000/hello', { method: 'POST', body: serializedMessage})
	.then(onResponse, onError)
    .then(onTextReady);

    