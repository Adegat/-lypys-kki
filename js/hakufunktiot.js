
function HSL_Dipoli_haku() {

    $("#hsl_kohde").empty();
    $("#hsl_aikataulu").empty();
    $("#hsl_bussit").empty();

    fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ query: '{ stop(id:"HSL:2222204") { name, lat, lon  stoptimesWithoutPatterns(numberOfDepartures:5) {scheduledDeparture, trip{tripHeadsign, route{shortName}   }}}} '}),
    })
        .then(res => res.json())
.then(res => {
        console.log(res);

    for(i=0; i<res.data.stop.stoptimesWithoutPatterns.length; i++) {
        // console.log(res.data.stop.stoptimesWithoutPatterns[i].scheduledDeparture);
        var name = res.data.stop.name;
        var data = res.data.stop.stoptimesWithoutPatterns[i].scheduledDeparture;
        var buss = res.data.stop.stoptimesWithoutPatterns[i].trip.route.shortName;
        destination = res.data.stop.stoptimesWithoutPatterns[i].trip.tripHeadsign;

        var date = new Date(null);
        date.setSeconds(data); // specify value for SECONDS here
        var result = date.toISOString().substr(11, 8);
        var slice = result.slice(0, -3);

        // jos document.getElementById, niin koodi on javascriptiä
        // jos taas $('#hsl_bussit'). niin koodi on Jqueryä

        $('#hsl_bussit').append('<li>' + buss + '</li>');
        $('#hsl_kohde').append('<li>' + destination + '</li>');
        $('#hsl_aikataulu').append('<li>' + slice + '</li>');

    }
});

}


function HSL_Otakallio_haku() {
     $("#hsl_kohde2").empty();
     $("#hsl_aikataulu2").empty();
     $("#hsl_bussit2").empty();

    fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ query: '{ stop(id:"HSL:2222203") { name, lat, lon  stoptimesWithoutPatterns(numberOfDepartures:5) {scheduledDeparture, trip{tripHeadsign, route{shortName}   }}}} '}),
    })
        .then(res => res.json())
.then(res => {
        console.log(res);

    for(i=0; i<res.data.stop.stoptimesWithoutPatterns.length; i++) {
        // console.log(res.data.stop.stoptimesWithoutPatterns[i].scheduledDeparture);
        var name = res.data.stop.name;
        var data = res.data.stop.stoptimesWithoutPatterns[i].scheduledDeparture;
        var buss = res.data.stop.stoptimesWithoutPatterns[i].trip.route.shortName;
        destination = res.data.stop.stoptimesWithoutPatterns[i].trip.tripHeadsign;

        var date = new Date(null);
        date.setSeconds(data); // specify value for SECONDS here
        var result = date.toISOString().substr(11, 8);
        var slice = result.slice(0, -3);

        // jos document.getElementById, niin koodi on javascriptiä
        // jos taas $('#hsl_bussit'). niin koodi on Jqueryä

        $('#hsl_bussit2').append('<li>' + buss + '</li>');
        $('#hsl_kohde2').append('<li>' + destination + '</li>');
        $('#hsl_aikataulu2').append('<li>' + slice + '</li>');

    }
});


}

function HSL_KemistiP_haku() {
    $("#hsl_kohde4").empty();
    $("#hsl_aikataulu4").empty();
    $("#hsl_bussit4").empty();

    fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ query: '{ stop(id:"HSL:2222212") { name, lat, lon  stoptimesWithoutPatterns(numberOfDepartures:5) {scheduledDeparture, trip{tripHeadsign, route{shortName}   }}}} '}),
    })
        .then(res => res.json())
.then(res => {
        console.log(res);

    for(i=0; i<res.data.stop.stoptimesWithoutPatterns.length; i++) {
        // console.log(res.data.stop.stoptimesWithoutPatterns[i].scheduledDeparture);
        var name = res.data.stop.name;
        var data = res.data.stop.stoptimesWithoutPatterns[i].scheduledDeparture;
        var buss = res.data.stop.stoptimesWithoutPatterns[i].trip.route.shortName;
        destination = res.data.stop.stoptimesWithoutPatterns[i].trip.tripHeadsign;

        var date = new Date(null);
        date.setSeconds(data); // specify value for SECONDS here
        var result = date.toISOString().substr(11, 8);
        var slice = result.slice(0, -3);

        // jos document.getElementById, niin koodi on javascriptiä
        // jos taas $('#hsl_bussit'). niin koodi on Jqueryä

        $('#hsl_bussit4').append('<li>' + buss + '</li>');
        $('#hsl_kohde4').append('<li>' + destination + '</li>');
        $('#hsl_aikataulu4').append('<li>' + slice + '</li>');

    }
});
}

function HSL_KemistiE_haku() {

    $("#hsl_kohde5").empty();
    $("#hsl_aikataulu5").empty();
    $("#hsl_bussit5").empty();

    fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ query: '{ stop(id:"HSL:2222234") { name, lat, lon  stoptimesWithoutPatterns(numberOfDepartures:5) {scheduledDeparture, trip{tripHeadsign, route{shortName}   }}}} '}),
    })
        .then(res => res.json())
.then(res => {
        console.log(res);

    for(i=0; i<res.data.stop.stoptimesWithoutPatterns.length; i++) {
        // console.log(res.data.stop.stoptimesWithoutPatterns[i].scheduledDeparture);
        var name = res.data.stop.name;
        var data = res.data.stop.stoptimesWithoutPatterns[i].scheduledDeparture;
        var buss = res.data.stop.stoptimesWithoutPatterns[i].trip.route.shortName;
        destination = res.data.stop.stoptimesWithoutPatterns[i].trip.tripHeadsign;

        var date = new Date(null);
        date.setSeconds(data); // specify value for SECONDS here
        var result = date.toISOString().substr(11, 8);
        var slice = result.slice(0, -3);

        // jos document.getElementById, niin koodi on javascriptiä
        // jos taas $('#hsl_bussit'). niin koodi on Jqueryä

        $('#hsl_bussit5').append('<li>' + buss + '</li>');
        $('#hsl_kohde5').append('<li>' + destination + '</li>');
        $('#hsl_aikataulu5').append('<li>' + slice + '</li>');

    }
});
    
}

function HSL_MiestenmetsaE_haku() {

    $("#hsl_kohde6").empty();
    $("#hsl_aikataulu6").empty();
    $("#hsl_bussit6").empty();

    fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ query: '{ stop(id:"HSL:2222220") { name, lat, lon  stoptimesWithoutPatterns(numberOfDepartures:5) {scheduledDeparture, trip{tripHeadsign, route{shortName}   }}}} '}),
    })
        .then(res => res.json())
.then(res => {
        console.log(res);

    for(i=0; i<res.data.stop.stoptimesWithoutPatterns.length; i++) {
        // console.log(res.data.stop.stoptimesWithoutPatterns[i].scheduledDeparture);
        var name = res.data.stop.name;
        var data = res.data.stop.stoptimesWithoutPatterns[i].scheduledDeparture;
        var buss = res.data.stop.stoptimesWithoutPatterns[i].trip.route.shortName;
        destination = res.data.stop.stoptimesWithoutPatterns[i].trip.tripHeadsign;

        var date = new Date(null);
        date.setSeconds(data); // specify value for SECONDS here
        var result = date.toISOString().substr(11, 8);
        var slice = result.slice(0, -3);

        // jos document.getElementById, niin koodi on javascriptiä
        // jos taas $('#hsl_bussit'). niin koodi on Jqueryä

        $('#hsl_bussit6').append('<li>' + buss + '</li>');
        $('#hsl_kohde6').append('<li>' + destination + '</li>');
        $('#hsl_aikataulu6').append('<li>' + slice + '</li>');

    }
});

}

function HSL_MiestenmetsaP_haku() {

    $("#hsl_kohde7").empty();
    $("#hsl_aikataulu7").empty();
    $("#hsl_bussit7").empty();

    fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ query: '{ stop(id:"HSL:2222221") { name, lat, lon  stoptimesWithoutPatterns(numberOfDepartures:5) {scheduledDeparture, trip{tripHeadsign, route{shortName}   }}}} '}),
    })
        .then(res => res.json())
.then(res => {
        console.log(res);

    for(i=0; i<res.data.stop.stoptimesWithoutPatterns.length; i++) {
        // console.log(res.data.stop.stoptimesWithoutPatterns[i].scheduledDeparture);
        var name = res.data.stop.name;
        var data = res.data.stop.stoptimesWithoutPatterns[i].scheduledDeparture;
        var buss = res.data.stop.stoptimesWithoutPatterns[i].trip.route.shortName;
        destination = res.data.stop.stoptimesWithoutPatterns[i].trip.tripHeadsign;

        var date = new Date(null);
        date.setSeconds(data); // specify value for SECONDS here
        var result = date.toISOString().substr(11, 8);
        var slice = result.slice(0, -3);

        // jos document.getElementById, niin koodi on javascriptiä
        // jos taas $('#hsl_bussit'). niin koodi on Jqueryä

        $('#hsl_bussit7').append('<li>' + buss + '</li>');
        $('#hsl_kohde7').append('<li>' + destination + '</li>');
        $('#hsl_aikataulu7').append('<li>' + slice + '</li>');

    }
});
}