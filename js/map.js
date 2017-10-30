
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