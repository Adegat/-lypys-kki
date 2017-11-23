$.ajax({
    url: 'data/info.json',
    header: ('Content-Type: application/json; charset=utf-8'),
    method: 'GET'
}).then(function(data) {
    console.log(data);
        //console.log("danger");
        //document.querySelectorAll(".notices")[0].setAttribute("style", 'background-color:red;color:white;');
        //document.querySelectorAll("#infocontent")[0].append(data.message);

});