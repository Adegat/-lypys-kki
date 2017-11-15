/*
* Luo google maps elementin ja hake kartan keskityksen locaatiao tietojen perusteella
* */
function initMap() {
    var uluru = {lat: 60.180700, lng: 24.831451};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
    });
  /*  var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });

    var infoWindow = new google.maps.InfoWindow;
     /*   // Try HTML5 geolocation.
       if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(function(position) {
               var pos = {lat: position.coords.latitude, lng: position.coords.longitude};
               var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
               var marker = new google.maps.Marker({
                   position: coords,
                   map: map
               });
               infoWindow.setPosition(pos);
               map.setCenter(pos);
           }, function() {
               handleLocationError(true, infoWindow, map.getCenter());
           });
       } else {
           // Browser doesn't support Geolocation
           handleLocationError(false, infoWindow, map.getCenter());
       }*/





/* Reitin piirto*/

    var geocoder;
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    var locations = [
        ['Manly Beach',60.180700, 24.831451, 1],
        ['Bondi Beach',60.181969, 24.830747, 2],
        ['Coogee Beach',60.183031, 24.829004, 3],
         /*['Maroubra Beach', -33.950198, 151.259302, 1],
        ['Cronulla Beach', -34.028249, 151.157507, 3]*/
    ];

        directionsDisplay = new google.maps.DirectionsRenderer();
        directionsDisplay.setMap(map);
        var infowindow = new google.maps.InfoWindow();
        var marker, i;
        var request = {
            travelMode: google.maps.TravelMode.DRIVING
        };
        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    infowindow.open(map, marker);
                }
            })(marker, i));

            if (i == 0) request.origin = marker.getPosition();
            else if (i == locations.length - 1) request.destination = marker.getPosition();
            else {
                if (!request.waypoints) request.waypoints = [];
                request.waypoints.push({
                    location: marker.getPosition(),
                    stopover: true
                });
            }

        }

        directionsService.route(request, function(result, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(result);
            }
        });



}
/*
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}
*/
