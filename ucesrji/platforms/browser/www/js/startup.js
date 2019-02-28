function trackAndCircle(){
getPort();
addPointLinePoly();
trackLocation();   
getEarthquakes();
callDivChange();
}


function startup() {
document.addEventListener('DOMContentLoaded', function() {
trackAndCircle ();
}, false);
}

