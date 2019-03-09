var client;
var forms;
// define a global variable to hold the layer so that we can use it later on
var formlayer;


function getforms(){
	client = new XMLHttpRequest();
	client.open('GET' , 'http://developer.cege.ucl.ac.uk:' + httpPortNumber + '/getFormData/' + httpPortNumber);
	client.onreadystatechange = formResponse; // note don't use formResponse() with brackets as that doesn't work
	client.send();
	}


function formResponse() {
	// this function listens out for the server to say that the data is ready - i.e. has state 4
	if (client.readyState == 4) {
	// once the data is ready, process the data
	var formdata = client.responseText;
	loadformlayer(formdata);
	}
	}



// convert the received data - which is text - to JSON format and add it to the map
function loadformlayer(formdata) {
	// convert the text to JSON
	var formjson = JSON.parse(formdata);

	forms = formjson;
	// add the JSON layer onto the map - it will appear using the default icons
	formlayer = L.geoJson(formjson).addTo(mymap);
	// change the map zoom so that all the data is shown
	mymap.fitBounds(formlayer.getBounds());
	}
