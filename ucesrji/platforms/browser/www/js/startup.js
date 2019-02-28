function trackAndCircle(){
getPort();
addPointLinePoly();
trackLocation();   
getEarthquakes();

}


function startup() {
document.addEventListener('DOMContentLoaded', function() {
trackAndCircle ();
}, false);
}

