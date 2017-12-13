/*
Luo google maps elementin ja hakee kartan keskityksen config tietojen perusteella
*/
//console.log("map.js");
//GPS tracking server ip example: 'http://11.111.111.111:8082/api';
function initMap(pressed) {
	function sleep(milliseconds) {
	if (pressed != 1){
	var start = new Date().getTime();
	for (var i = 0; i < 1e7; i++) {
		if ((new Date().getTime() - start) > milliseconds){
      break;
    }
	}
	}
	}
	
	sleep(1000);
	
	
    var imageBus = {
        url: '../../../../img/bussi.png',
        scaledSize: new google.maps.Size(50, 50), // scaled size
    };
    var imagehslStop = '../../../../img/hslmarker.png';
    var imageStop = '../../../../img/buslogo.png';
    var imageOwnPosition = '../../../../img/redbutton.png';
    //var uluru = {lat: 60.180700, lng: 24.831451}
    var uluru = {
        lat: 60.181469,
        lng: 24.830747
    };
	
	var centeredOn = {lat:Number(mapCentered.lat),lng: Number(mapCentered.lng)};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: centeredOn,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
    });

    //console.log(busStopCoordLat);
    busStopCoordLat = Number(busStopCoordLat);
    busStopCoordLng = Number(busStopCoordLng);
    //console.log(hslStopCoord1.lat);
    //console.log(hslStopCoord2);
    hslStopCoord1.lat = Number(hslStopCoord1.lat);
    hslStopCoord1.lng = Number(hslStopCoord1.lng);
    hslStopCoord2.lat = Number(hslStopCoord2.lat);
    hslStopCoord2.lng = Number(hslStopCoord2.lng);



    var marker = new google.maps.Marker({
        position: {
            lat: hslStopCoord1.lat,
            lng: hslStopCoord1.lng
        },
        map: map,
        title: 'HSL pysäkki',
        icon: {
            labelOrigin: new google.maps.Point(12, 32),
            url: imagehslStop,
            origin: new google.maps.Point(0, 0),
        },
        label: {
            color: 'black',
            fontWeight: 'bold',
            text: hslStopName1,
        }
    })

    var marker2 = new google.maps.Marker({
        position: {
            lat: hslStopCoord2.lat,
            lng: hslStopCoord2.lng
        },
        map: map,
        title: 'HSL pysäkki',
        icon: {
            labelOrigin: new google.maps.Point(12, 32),
            url: imagehslStop,
            origin: new google.maps.Point(0, 0),
        },
        label: {
            color: 'black',
            fontWeight: 'bold',
            text: hslStopName2,
        }
    })


    var root = server;
	var markerBus;
    //console.log(root);
    ////////////////////Bus GPS tracking/////////////////////////
    function markerLoop() {
        var busPos;
        var busLocMarkers = [];
		
        if (markerBus){
			markerBus.setMap(null)
			markerBus = null;
		};
        $.ajax({
            url: root + '/positions',
            method: 'GET',
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            headers: {
                "Authorization": "Basic " + btoa('admin' + ":" + 'admin')
            }
        }).then(function(data2) {
            //console.log(data2);
            busPos = {
                lat: data2[0].latitude,
                lng: data2[0].longitude
            };
            //console.log(data2[0].longitude);
            //console.log(busPos);
            //console.log("location updated");
            //console.log(busPos);

            busLocMarkers.push(busPos);

            function createLocMarker(map) {
                markerBus = new google.maps.Marker({
                    position: busLocMarkers[0],
                    map: map,
                    title: 'Smart Bus',
                    icon: imageBus
                });
            }

            createLocMarker(null);
            createLocMarker(map);
        });
    }
    setInterval(function(){ markerLoop(); }, 5000);
    ////////////////////Bus GPS tracking/////////////////////////

    /* Reitin piirto*/
    var geocoder;
    var gmarkers = [];
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    var centered = new google.maps.LatLng(37.7699298, -122.4469157);
    var locations = [
        ['Manly Beach', 60.180700, 24.831451, 1],
        ['Otaniemi', 60.180972, 24.830825, 2],
        ['Bondi Beach', 60.181969, 24.830747, 3],
        ['Coogee Beach', 60.183031, 24.829004, 4],
    ];
    var locations2names = [];
    var locations2coords = [];

    var locations3 = [];

    for (i = 0; i < stopCoords.length; i++) {
        //console.log("bbb");
        locations2names.push(stopNames[i]);
        locations2coords.push(stopCoords[i]);
        locations3.push([stopNames[i], stopCoords[i].lat, stopCoords[i].lng, i, stopVisible[i]]);
    }



    for (i = 0; i < locations3.length; i++) {
        if (locations3[i][4] == 0) {
			var empty = 1;
			gmarkers.push(empty);
        } else {
            var marker = new google.maps.Marker({
                position: {
                    lat: Number(locations3[i][1]),
                    lng: Number(locations3[i][2])
                },
                map: map,
                title: locations3[i][0],
                icon: {
                    labelOrigin: new google.maps.Point(12, 32),
                    url: imageStop,
                    origin: new google.maps.Point(0, 0),
                },
                label: {
                    color: 'black',
                    fontWeight: 'bold',
                    text: locations3[i][0],
                }
            });
            gmarkers.push(marker);
        }
    }

    //console.log(locations3);


    directionsDisplay = new google.maps.DirectionsRenderer({
        suppressMarkers: true,
        preserveViewport: true,
        polylineOptions: {
            strokeColor: "#4806B1",
			strokeOpacity: 0.7
        }
    });
    directionsDisplay.setMap(map);
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    var request = {
        travelMode: google.maps.TravelMode.DRIVING
    };
    for (i = 0; i < locations3.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(Number(locations3[i][1]), Number(locations3[i][2])),
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations3[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));

        if (i == 0) request.origin = marker.getPosition();
        else if (i == locations3.length - 1) request.destination = marker.getPosition();
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

    if (pressed == 1) {
        var laLatLng = new google.maps.LatLng(busStopCoordLat, busStopCoordLng);
        map.panTo(laLatLng);
        map.setZoom(17);
        var marker = new google.maps.Marker({
            position: {
                lat: busStopCoordLat,
                lng: busStopCoordLng
            },
            map: map,
            title: 'You are here',
            icon: {
                labelOrigin: new google.maps.Point(12, 32),
                url: imageOwnPosition,
                origin: new google.maps.Point(0, 0),
            },
            label: {
                color: 'black',
                fontWeight: 'bold',
                text: "Olet tässä",
            }
        });

        for (i = 0; i < locations3.length; i++) {
            //console.log(locations3[i][0]);
            if (locations3[i][0] == stopName) {
				//console.log(locations3[i][0]);
				//console.log(gmarkers);
                //console.log("aa");
                gmarkers[i].setMap(null);
            }
        }
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}