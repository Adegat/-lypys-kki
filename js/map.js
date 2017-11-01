
function initMap() {
    var uluru = {lat: 60.2208061, lng: 24.8053184};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map


    });

}
/*
$('#resize').click(function muutakoko(){
        var kartta = document.getElementById("map");
        var value = $(this).html();
        if(value != 'Piennennä'){
            $(this).html('Piennennä');
            $(kartta).toggleClass('fullscreen map');
            initMap();
            return false;
        }else{
            $(this).html('Suurenna');
            $(kartta).toggleClass('map fullscreen');
            initMap();
        }
    }
)*/