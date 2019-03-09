var client;
var GeoJSONs;
// define a global variable to hold the layer so that we can use it later on
var GeoJSONlayer;
var london_poi = 'london_poi'
var london_highway = 'london_highway'


function load_london_poi(){
		alert("Loading london poi");
	getGeoJSON(london_poi);

}


function load_london_highway(){
		alert("Loading london highway");
	getGeoJSON(london_highway);
}




function getGeoJSONs(x){
	client = new XMLHttpRequest();
	client.open('GET' , 'http://developer.cege.ucl.ac.uk:' + httpPortNumber + '/getGeoJSON/' + x + '/geom');
	client.onreadystatechange = GeoJSONResponse; // note don't use GeoJSONResponse() with brackets as that doesn't work
	client.send();
	}


function GeoJSONResponse() {
	// this function listens out for the server to say that the data is ready - i.e. has state 4
	if (client.readyState == 4) {
	// once the data is ready, process the data
	var GeoJSONdata = client.responseText;
	loadGeoJSONlayer(GeoJSONdata);
	}
	}



// convert the received data - which is text - to JSON GeoJSONat and add it to the map
function loadGeoJSONlayer(GeoJSONdata) {
	// convert the text to JSON
	var GeoJSONjson = JSON.parse(GeoJSONdata);

	GeoJSONs = GeoJSONjson;
	// add the JSON layer onto the map - it will appear using the default icons
	GeoJSONlayer = L.geoJson(GeoJSONjson).addTo(mymap);
	// change the map zoom so that all the data is shown
	mymap.fitBounds(GeoJSONlayer.getBounds());
	}


