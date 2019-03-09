var client;

var formdata;

// and a variable that will hold the layer itself
// we need to do this outside the function so that we
// can use it to remove the layer later on
var formdatalayer;

// run the function when you click the LOAD DATA BUTTON
function loadFormdata() {
    // call the getEarthquakes code
    // keep the alert message so that we know something is happening
    alert("Loading formdata");
    getforms();
}


// get the Earthquakes data using an XMLHttpRequest
function getforms() {
    client = new XMLHttpRequest();
    client.open('GET', 'http://developer.cege.ucl.ac.uk:' + httpPortNumber + '/getFormData/' + httpPortNumber);
    client.onreadystatechange = formdataResponse;
    // note don't use earthquakeResponse() with brackets as that doesn't work
    client.send();
}


// wait for the response from the data server,
// and process the response once it is received
function formdataResponse() {
    // this function listens out for the server to say that
    // the data is ready - i.e. has state 4
    if (client.readyState == 4) {
        // once the data is ready, process the data
        var formdata_text = client.responseText;
        loadFormdatalayer(formdata_text);
    }
}

// convert the received data - which is text - to JSON format and add it to the map
function loadFormdatalayer(formdata_text) {
    // convert the text to JSON
    var formdatajson = JSON.parse(formdata_text);
    // pass the earthquake data to the global variable we created earlier
    formdata = formdatajson;
    // load the geoJSON layer -- using customer icons
    formdatalayer = L.geoJson(formdatajson).addTo(mymap);
    // change the map zoom so that all the data is shown
    //mymap.fitBounds(formdatajson.getBounds());
}

// run the function when you click the REMOVE DATA BUTTON
function removeFormData() {
    alert("FormData  will be removed");
    mymap.removeLayer(formdatalayer);
} 