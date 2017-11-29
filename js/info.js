$.ajax({
    url: '../../../../data/mainConfig.json',
    header: ('Content-Type: application/json; charset=utf-8'),
    method: 'GET'
}).then(function(data) {
    linebreak= document.createElement("br")
    //console.log(data,'moi');
    //console.log("danger");
    document.querySelectorAll(".infoT")[0].setAttribute("style", 'background-color:purple;color:white;');
    document.querySelectorAll("#infocontnet")[0].innerHTML = data.message1;
    document.querySelectorAll("#infosv")[0].innerHTML = data.message2;
    document.querySelectorAll("#infoeng")[0].innerHTML = data.message3;
});