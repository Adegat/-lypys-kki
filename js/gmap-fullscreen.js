
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