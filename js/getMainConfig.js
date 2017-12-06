var server;

$.ajax({
    url: '../../../../data/mainConfig.json',
    header: ('Content-Type: application/json; charset=utf-8'),
    method: 'GET',
	success: function(data){
		server = data.server;
		console.log("getmainconfig");
		console.log(server);
	}
});