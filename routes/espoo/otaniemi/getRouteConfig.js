var stopNames = [];
var stopCoords = [];
var stopVisible = [];
var mapCentered;

//console.log("getrouteconfig");
$.ajax({
    url: '../routeConfig.json',
    header: ('Content-Type: application/json; charset=utf-8'),
    method: 'GET',
    success: function(data) {
        //console.log(data.object);
		mapCentered = data.mapCentered;
        for (var stop in data.object) {
            //console.log(data.object[stop].coord);
            stopNames.push(data.object[stop].name);
            stopCoords.push(data.object[stop].coord);
            stopVisible.push(data.object[stop].visible);
        }
        //console.log(stopNames);
        //console.log(stopCoords);
    }
});