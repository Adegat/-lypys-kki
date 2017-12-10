//Keyboard variables
var pressed = 0;
var mapOpen = 0;
var clearing;
var infoVisible = 0;
// console.log("pressed: "+pressed+" "+"mapopen: "+mapOpen+" "+"infoVisible: "+infoVisible+" "+"clearing: "+clearing);
//Keyboard functions
document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37 && mapOpen == 1 && pressed == 0) {
        $("#lean_overlay").trigger("click");
        $('#resize').each(muutakoko);
        clearTimeout(clearing);
        //console.log("cleared clearScreen")
        pressed = 1;
        mapOpen = 0;
        infoVisible = 0;
        //console.log("vasen");
        setTimeout(clearPress, 2000);
        //console.log("pressed: "+pressed+" "+"mapopen: "+mapOpen+" "+"infoVisible: "+infoVisible+" "+"clearing: "+clearing);
    } else if (event.keyCode == 37 && pressed == 0 && infoVisible == 1) {
        $("#lean_overlay").trigger("click");
        clearTimeout(clearing);
        //console.log("cleared clearScreen")
        pressed = 1;
        infoVisible = 0;
        $("#lean_overlay").trigger("click");
        //console.log("vasen");
        $('#resize').each(muutakoko);
        mapOpen = 1;
        clearing = setTimeout(clearScreen, 45000);
        setTimeout(clearPress, 2000);
        //console.log("pressed: "+pressed+" "+"mapopen: "+mapOpen+" "+"infoVisible: "+infoVisible+" "+"clearing: "+clearing);
    } else if (event.keyCode == 37 && pressed == 0) {
        $("#lean_overlay").trigger("click");
        clearTimeout(clearing);
        //console.log("cleared clearScreen")
        pressed = 1;
        //console.log("vasen");
        $('#resize').each(muutakoko);
        mapOpen = 1;
        clearing = setTimeout(clearScreen, 45000);
        setTimeout(clearPress, 2000);
        //console.log("pressed: "+pressed+" "+"mapopen: "+mapOpen+" "+"infoVisible: "+infoVisible+" "+"clearing: "+clearing);
    }

    if (event.keyCode == 39 && pressed == 0 && mapOpen == 1) {
        clearTimeout(clearing);
        //console.log("cleared clearScreen")
        pressed = 1;
        mapOpen = 0;
        $('#resize').each(muutakoko);
        //console.log("oikea");
        //console.log("pressed: "+pressed+" "+"mapopen: "+mapOpen+" "+"infoVisible: "+infoVisible+" "+"clearing: "+clearing);

        if (infoVisible == 0) {
            $("#go").click();
            infoVisible = 1;
            clearing = setTimeout(clearScreen, 45000);
            //console.log("pressed: "+pressed+" "+"mapopen: "+mapOpen+" "+"infoVisible: "+infoVisible+" "+"clearing: "+clearing);
        } else {
            $("#lean_overlay").trigger("click");
            infoVisible = 0;
            //console.log("pressed: "+pressed+" "+"mapopen: "+mapOpen+" "+"infoVisible: "+infoVisible+" "+"clearing: "+clearing);
        }
        setTimeout(clearPress, 2000);
        //console.log("pressed: "+pressed+" "+"mapopen: "+mapOpen+" "+"infoVisible: "+infoVisible+" "+"clearing: "+clearing);
    } else if (event.keyCode == 39 && pressed == 0) {
        clearTimeout(clearing);
        //console.log("cleared clearScreen")
        pressed = 1;
        //console.log("oikea");
        //	 console.log("pressed: "+pressed+" "+"mapopen: "+mapOpen+" "+"infoVisible: "+infoVisible+" "+"clearing: "+clearing);

        if (infoVisible == 0) {
            $("#go").click();
            infoVisible = 1;
            clearing = setTimeout(clearScreen, 45000);
            //	 console.log("pressed: "+pressed+" "+"mapopen: "+mapOpen+" "+"infoVisible: "+infoVisible+" "+"clearing: "+clearing);

        } else {
            $("#lean_overlay").trigger("click");
            infoVisible = 0;
            // console.log("pressed: "+pressed+" "+"mapopen: "+mapOpen+" "+"infoVisible: "+infoVisible+" "+"clearing: "+clearing);

        }
        setTimeout(clearPress, 2000);
        //console.log("pressed: "+pressed+" "+"mapopen: "+mapOpen+" "+"infoVisible: "+infoVisible+" "+"clearing: "+clearing);

    }
    //Keyboard functions
    function clearPress() {
        pressed = 0;
    }

    function clearScreen() {
        if (mapOpen == 1) {
            mapOpen = 0;
            $('#resize').each(muutakoko);
        }
        //console.log("clearscreen");			
        //console.log("pressed: "+pressed+" "+"mapopen: "+mapOpen+" "+"infoVisible: "+infoVisible+" "+"clearing: "+clearing);
        $("#lean_overlay").trigger("click");
        infoVisible = 0;
        //console.log("pressed: "+pressed+" "+"mapopen: "+mapOpen+" "+"infoVisible: "+infoVisible+" "+"clearing: "+clearing);

    }
});