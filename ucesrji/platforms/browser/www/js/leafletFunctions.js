var client;
var earthquakes;

function addPointLinePoly() { 
// add a point
L.marker([51.5, -0.09]).addTo(mymap)
.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
// add a circle
L.circle([51.508, -0.11], 500, {
color: 'red',
fillColor: '#f03',
fillOpacity: 0.5
}).addTo(mymap).bindPopup("I am a circle.");
// add a polygon with 3 end points (i.e. a triangle)
var myPolygon = L.polygon([
[51.509, -0.08],
[51.503, -0.06],
[51.51, -0.047]
],{
color: 'red',
fillColor: '#f03',
fillOpacity: 0.5
}).addTo(mymap).bindPopup("I am a polygon.");
}
   



function getEarthquakes(){
client = new XMLHttpRequest();
client.open('GET','https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson');
client.onreadystatechange = earthquakeResponse; // note don't use earthquakeResponse() with brackets as that doesn't work
client.send();
}


function earthquakeResponse() {
// this function listens out for the server to say that the data is ready - i.e. has state 4
if (client.readyState == 4) {
// once the data is ready, process the data
var earthquakedata = client.responseText;
loadEarthquakelayer(earthquakedata);
}
}


// define a global variable to hold the layer so that we can use it later on
var earthquakelayer;
// convert the received data - which is text - to JSON format and add it to the map
function loadEarthquakelayer(earthquakedata) {
// convert the text to JSON
var earthquakejson = JSON.parse(earthquakedata);

earthquakes = earthquakejson;
// add the JSON layer onto the map - it will appear using the default icons
earthquakelayer = L.geoJson(earthquakejson).addTo(mymap);
// change the map zoom so that all the data is shown
mymap.fitBounds(earthquakelayer.getBounds());
}
