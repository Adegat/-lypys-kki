function liikennointi() {
    var aikaam = "09.00";
    var aikapm = "13.30";
    var d = new Date();
    var time = d.toLocaleTimeString();
    console.log(time)
    if(aikaam<= time && time <= aikapm){
        document.getElementById("AikaTaulu").innerHTML = "<h4>Älybyssi on liikenteessä</h4>" + " " + "<i class=\'fa fa-bus\' aria-hidden=\'true\'></i>"
        document.getElementById("AikaTaulu").setAttribute("style", 'background-color:#4806B1');
    }else{
        document.getElementById("AikaTaulu").innerHTML = "<h4>Älybyssi on liikenteessä</h4>" + "" + "<i class=\'fa fa-bus\' aria-hidden=\'true\'></i>"
        document.getElementById("AikaTaulu").setAttribute("style", 'background-color:#48066E');
    }

}