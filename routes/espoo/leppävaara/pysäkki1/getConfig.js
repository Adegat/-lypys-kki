var busStopCoordLat;
var busStopCoordLng;
var hslStopID1;
var hslStopID2;

$.ajax({
		url: 'config.json',
		header: ('Content-Type: application/json; charset=utf-8'),
		method: 'GET',
		success: function(data){
		busStopCoordLat = data.stop_coordinates.lat;	
		busStopCoordLng = data.stop_coordinates.lng;	
		hslStopID1 = data.HSLStop1;
		hslStopID2 = data.HSLStop2;
		hslStopCoord1 = data.HSLStop1Coord;
		hslStopCoord2 = data.HSLStop2Coord;
		hslStopName1 = data.HSLStop1Name;
		hslStopName2 = data.HSLStop2Name;
		stopName = data.stopName;
		
		if (data.level == 1){
			//console.log("neutral");
			$(".notices").attr("style", "background-color:#5530E0;");
			$("#incl").append(data.alert);
		} else if (data.level == 2) {
			//console.log("traffic");
			$(".notices").attr("style", 'background-color:yellow;color:black;');
			$("#incl").append(data.alert);
		} else {
			//console.log("danger");
			$(".notices").attr("style", 'background-color:red;color:white;');
			$("#incl").append(data.alert);
		}
}});