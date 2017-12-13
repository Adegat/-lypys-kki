$(function(){
$.ajax({
    url: '../../../../data/mainConfig.json',
    header: ('Content-Type: application/json; charset=utf-8'),
    method: 'GET'
}).then(function(data) {
	//console.log("info.js");
    linebreak= document.createElement("br");
    //console.log(data,'moi');
    //console.log("danger");

	$("#infoText").attr("style", 'background-color:#5530E0;color:white;');
	$("#info_fi").empty().append(data.message1);
	$("#info_se").empty().append(data.message2);
	$("#info_gb").empty().append(data.message3);
	$("#info_fi").attr("style", 'font-size:1.6rem;');
	$("#info_se").attr("style", 'font-size:1.6rem;');
	$("#info_gb").attr("style", 'font-size:1.6rem;');
});
});