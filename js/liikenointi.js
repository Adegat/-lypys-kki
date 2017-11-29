function liikennointi() {
    var aikaam = "09.00";
    var aikapm = "13.30";
    var d = new Date();
    var time = d.toLocaleTimeString();
    console.log(time)
    if(aikaam<= time && time <= aikapm){
        document.getElementById("AikaTaulu").innerHTML = "Älybyssi on liikenteessä"

    }else{
        document.getElementById("AikaTaulu").innerHTML = "Älybyssi ei ole liikenteessä"
    }

}