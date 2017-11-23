/*
* Luo google maps elementin ja hake kartan keskityksen locaatiao tietojen perusteella
* */

function initMap() {
	var imageBus = {
		url: 'img/bussi.png',
		scaledSize: new google.maps.Size(75, 75), // scaled size
	};
	var imageStop = 'img/pysakki2.png';

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
	
	////////////////////Bus GPS tracking/////////////////////////
	function markerLoop() {    
		var busPos;
		var busLocMarkers = [];
		marker.setMap(null)
		marker = null;
		$.ajax({
			url: root + '/positions',
			method: 'GET',
			dataType : "json",
			contentType: "application/json; charset=utf-8",
			headers: {
			"Authorization": "Basic " + btoa('admin' + ":" + 'admin')
			}
			}).then(function(data2) {
			//console.log(data2);
			busPos = {lat:data2[0].latitude,lng:data2[0].longitude};
			//console.log(data2[0].longitude);
			//console.log(busPos);
			//console.log("location updated");
			//console.log(busPos);
			
			busLocMarkers.push(busPos);
			
			function createLocMarker(map){
  			marker = new google.maps.Marker({
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
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();
    var locations = [
        ['Manly Beach',60.180700, 24.831451, 1],
		['Otaniemi', 60.180972, 24.830825, 2],
        ['Bondi Beach',60.181969, 24.830747, 3],
        ['Coogee Beach',60.183031, 24.829004, 4],
    ];
	
	var marker = new google.maps.Marker({
			position: {lat:60.180700, lng:24.831451}, 
			map: map,
			title: 'Pysäkki 1',
			icon: {
				labelOrigin: new google.maps.Point(51, 50),
				url: imageStop,
				origin: new google.maps.Point(0, 0),
			},
			label: {
				color: 'black',
				fontWeight: 'bold',
				text: 'Innovation alley',
			}
	});
	var marker = new google.maps.Marker({
			position: {lat:60.181969, lng:24.830747}, 
			map: map,
			title: 'Pysäkki 2',
			icon: {
				labelOrigin: new google.maps.Point(51, 50),
				url: imageStop,
				origin: new google.maps.Point(0, 0),
			},
			label: {
				color: 'black',
				fontWeight: 'bold',
				text: 'Acre',
			}
	});
	var marker = new google.maps.Marker({
			position: {lat:60.183031, lng:24.829004}, 
			map: map,
			title: 'Pysäkki 3',
			icon: {
				labelOrigin: new google.maps.Point(51, 50),
				url: imageStop,
				origin: new google.maps.Point(0, 0),
			},
			label: {
				color: 'black',
				fontWeight: 'bold',
				text: 'Valimo',
			}
	});
        directionsDisplay = new google.maps.DirectionsRenderer({
			suppressMarkers:true
		});
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
