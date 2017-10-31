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

}/*
$(function() {
    var map = new google.maps.Map(document.getElementById("map_canvas"), {});
    var newyork = new google.maps.LatLng(40.69847032728747, -73.9514422416687);

    var googleMapWidth = $("#map_canvas").css('width');
    var googleMapHeight = $("#map_canvas").css('height');

    map.setCenter(newyork);

    $('#enter-full-screen').click(function(){
        $("#map_canvas").css("position", 'fixed').
        css('top', 0).
        css('left', 0).
        css("width", '100%').
        css("height", '100%');
        google.maps.event.trigger(map, 'resize');
        map.setCenter(newyork);
        return false;
    });

    $('#exit-full-screen').click(function(){
        $("#map_canvas").css("position", 'relative').
        css('top', 0).
        css("width", googleMapWidth).
        css("height", googleMapHeight);
        google.maps.event.trigger(map, 'resize');
        map.setCenter(newyork);
        return false;
    });
});

var googleMapWidth = $("#map-container").css('width');
var googleMapHeight = $("#map-container").css('height');

$('#btn-enter-full-screen').click(function() {

    $("#map-container").css({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    });

    $("#map-canvas").css({
        height: '100%'
    });

    google.maps.event.trigger(map, 'resize');
    map.setCenter(newyork);

    // Gui
    $('#btn-enter-full-screen').toggle();
    $('#btn-exit-full-screen').toggle();

    return false;
});

$('#btn-exit-full-screen').click(function() {

    $("#map-container").css({
        position: 'relative',
        top: 0,
        width: googleMapWidth,
        height: googleMapHeight,
        backgroundColor: 'transparent'
    });

    google.maps.event.trigger(map, 'resize');
    map.setCenter(newyork);

    // Gui
    $('#btn-enter-full-screen').toggle();
    $('#btn-exit-full-screen').toggle();
    return false;
});
*/