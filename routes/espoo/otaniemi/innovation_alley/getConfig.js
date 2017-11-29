var busStopCoordLat;
var busStopCoordLng;

$.ajax({
		url: 'config.json',
		header: ('Content-Type: application/json; charset=utf-8'),
		method: 'GET',
		success: function(data){
		busStopCoordLat = data.coordinates.lat;	
		busStopCoordLng = data.coordinates.lng;	
		if (data.level == 1){
			//console.log("neutral");
			$(".notices").attr("style", "background-color:blue;");
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