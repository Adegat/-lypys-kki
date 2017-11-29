console.log("test");
$.ajax({
		url: 'config.json',
		header: ('Content-Type: application/json; charset=utf-8'),
		method: 'GET'
	}).then(function(data) {
		console.log(data);
		if (data.level == 1){
			//console.log("neutral");
			document.querySelectorAll(".notices")[0].setAttribute("style", "background-color:blue;");
			document.querySelectorAll("#incl")[0].append(data.alert);
		} else if (data.level == 2) {
			//console.log("traffic");
			document.querySelectorAll(".notices")[0].setAttribute("style", 'background-color:yellow;color:black;');
			document.querySelectorAll("#incl")[0].append(data.alert);
		} else {
			//console.log("danger");
			document.querySelectorAll(".notices")[0].setAttribute("style", 'background-color:red;color:white;');
			document.querySelectorAll("#incl")[0].append(data.alert);
		}
});