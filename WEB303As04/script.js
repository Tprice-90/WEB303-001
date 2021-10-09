/*
    Assignment 4
    Terry Price #0622422
*/

$(document).ready(function(){
    // your code here
	if(localStorage) {
        var savedLatitude = localStorage.getItem('latitude');
        var savedLongitude = localStorage.getItem('longitude');
    	navigator.geolocation.getCurrentPosition((position) => {
        if((savedLatitude === null) && (savedLongitude === null)) {
                $('div#youarehere').eq(0).html(`Welcome! Your current position is: <br>
                Latitude: ${position.coords.latitude} <br>
                longitude: ${position.coords.longitude}`);
                localStorage.setItem('latitude', position.coords.latitude);
                localStorage.setItem('longitude', position.coords.longitude);
            }
            else {
                var differencePosition = calcDistance(savedLatitude, savedLongitude, position.coords.latitude, position.coords.longitude).toFixed(3);
                $('div#youarehere').eq(0).html(`Your last position was:<br>
                Latitude: ${savedLatitude}<br>
                Longitude: ${savedLongitude}<br><br>
                Your current position is:<br>
                Latitude: ${position.coords.latitude}<br>
                Longitude: ${position.coords.longitude}<br>
                A difference of: ${differencePosition} meters.`);
                localStorage.setItem('latitude', position.coords.latitude);
                localStorage.setItem('longitude', position.coords.longitude);
        }
        },
        function() {
            $('div#youarehere').html(`Geolocation currently not available, please enable and try again...`);
        },
        {
            enableHighAccuracy: true
        });
    }
    else {
        $('div#youarehere').html(`Local storage is currently unavailable, please enable and try again...`);
    }

    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistance(lat1, lon1, lat2, lon2){
        var toRadians = function(num) {
            return num * Math.PI / 180;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2-lat1);
        var Δλ = toRadians(lon2-lon1);

        var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ/2) * Math.sin(Δλ/2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        return ( R * c );
    }
});


