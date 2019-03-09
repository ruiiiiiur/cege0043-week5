function trackAndCircle(){
loadW3HTML();
getPort();
addPointLinePoly();
trackLocation();   
//getEarthquakes();
//getforms();
//callDivChange();
}


function startup() {
document.addEventListener('DOMContentLoaded', function() {
trackAndCircle ();
}, false);
}

function loadW3HTML() {
w3.includeHTML();
}