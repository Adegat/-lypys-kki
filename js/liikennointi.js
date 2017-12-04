function liikennointi() {
    var aikaam = "09.00";
    var aikapm = "13.30";
    var d = new Date();
    var time = d.toLocaleTimeString();
    var kieli = "fi";
    if(aikaam <= time && time <= aikapm){
        $.ajax({
            url: '../../../../data/mainConfig.json',
            header: ('Content-Type: application/json; charset=utf-8'),
            method: 'GET'
        }).then(function(data) {
            console.log(data)
            linebreak= document.createElement("AikaTaulu");
            setInterval(function () {

                if(kieli=="fi"){
                    muutakulku(data.message4);
                    kieli="sv";
                }else if(kieli =="sv"){
                    muutakulku(data.message5);
                    kieli="gb";
                }else{
                    muutakulku(data.message6);
                    kieli="fi";
                }
            },6000);
        });
        document.getElementById("AikaTaulu").innerHTML ="<i class=\'fa fa-bus\' aria-hidden=\'true\'></i>"
        document.getElementById("AikaTaulu").setAttribute("style", 'background-color:#4806B1');
    }else{
        $.ajax({
            url: '../../../../data/mainConfig.json',
            header: ('Content-Type: application/json; charset=utf-8'),
            method: 'GET'
        }).then(function(data) {
            console.log(data)
            linebreak= document.createElement("AikaTaulu");
            setInterval(function () {

                if(kieli=="fi"){
                    muutakulku(data.message7);
                    kieli="sv";
                }else if(kieli =="sv"){
                    muutakulku(data.message8);
                    kieli="gb";
                }else{
                    muutakulku(data.message9);
                    kieli="fi";
                }
            },6000);

            muutakulku(data.message7);
        });
        document.getElementById("AikaTaulu").innerHTML ="<i class=\'fa fa-bus\' aria-hidden=\'true\'></i>"
        document.getElementById("AikaTaulu").setAttribute("style", 'background-color:#4806B1');
    }

}
function muutakulku(viesti) {
    $("#kulku").empty().append(viesti);
}