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

fetch('http://localhost:3000/hello?name=Jeannette', { method: 'POST'})
	.then(onResponse, onError)
    .then(onTextReady);