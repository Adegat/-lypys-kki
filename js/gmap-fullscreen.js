<<<<<<< HEAD
=======
function isomap(){

buttonZoom.onclick = function() {
    var div = document.getElementById("map");

    if(div) {

        div.style.height = "100%";
        div.style.width = "100%";
        div.style.position = "absolute";
        div.style.top = "0";
        div.style.left ="0";
        return false;
    }
};

}
>>>>>>> ca3ea17301a67eac3e22ae55dc9c058f3d2634c4

/*function isomap()
{

    var elem = document.getElementById("map");
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    }

}*/
function fullscreen() {

    $("#map_toggler").click(function () {
        $("#map").toggleClass("fullscreen")
    });
}