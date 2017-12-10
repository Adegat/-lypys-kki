function hsl_haku() {
    var data = [];
    var buss = [];
    var destination = [];
    var slice = [];
    var data2 = [];
    var buss2 = [];
    var destination2 = [];
    var slice2 = [];
    $("#hsl_kohde").empty();
    $("#hsl_aikataulu").empty();
    $("#hsl_bussit").empty();

    //console.log("hsl " + hslStopID2);
    fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors',
            body: JSON.stringify({
                query: '{first:stop(id:"' + hslStopID1 + '") { name, lat, lon  stoptimesWithoutPatterns(numberOfDepartures:3) {scheduledDeparture, trip{tripHeadsign, route{shortName}   }}}second:stop(id:"' + hslStopID2 + '") { name, lat, lon  stoptimesWithoutPatterns(numberOfDepartures:3) {scheduledDeparture, trip{tripHeadsign, route{shortName}   }}}}'
            }),
        })
        .then(res => res.json())
        .then(res => {
            //console.log(res.data);
            ////////////////HSL STOP 1/////////////////////
            var name = res.data.first.name;
            for (i = 0; i < res.data.first.stoptimesWithoutPatterns.length; i++) {
                data.push(res.data.first.stoptimesWithoutPatterns[i].scheduledDeparture);
                buss.push(res.data.first.stoptimesWithoutPatterns[i].trip.route.shortName);
                destination.push(res.data.first.stoptimesWithoutPatterns[i].trip.tripHeadsign);

                var date = new Date(null);
                date.setSeconds(data[i]); // specify value for SECONDS here
                var result = date.toISOString().substr(11, 8);
                slice.push(result.slice(0, -3));
                //console.log(data);
            }
            $('#HSLStopname1').empty();
            $('#hsl_bussit').empty();
            $('#HSLStopname1').append(name);
            for (i = 0; i < buss.length; i++) {
                $('#hsl_bussit').append('<div><p style="display:inline-block;margin-left:0.5em;margin-right:0.5em;width:2.3em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;">' + buss[i] + '</p>' + '<p style="display:inline-block;width:7em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;">' + destination[i] + '</p>' + '<p style="display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;">' + slice[i] + '</p></div>');
            }
            ////////////////HSL STOP 1/////////////////////


            ////////////////HSL STOP 2/////////////////////
            var name2 = res.data.second.name;
            for (i = 0; i < res.data.second.stoptimesWithoutPatterns.length; i++) {
                data2.push(res.data.second.stoptimesWithoutPatterns[i].scheduledDeparture);
                buss2.push(res.data.second.stoptimesWithoutPatterns[i].trip.route.shortName);
                destination2.push(res.data.second.stoptimesWithoutPatterns[i].trip.tripHeadsign);

                var date = new Date(null);
                date.setSeconds(data2[i]); // specify value for SECONDS here
                var result = date.toISOString().substr(11, 8);
                slice2.push(result.slice(0, -3));
                //console.log(data2);
            }
            $('#HSLStopname2').empty();
            $('#hsl_bussit2').empty();
            $('#HSLStopname2').append(name2);
            for (i = 0; i < buss2.length; i++) {
                $('#hsl_bussit2').append('<div style=""><p style="display:inline-block;margin-left:0.5em;margin-right:0.5em;width:2.3em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;">' + buss2[i] + '</p>' + '<p style="display:inline-block;width:7em;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;">' + destination2[i] + '</p>' + '<p style="display:inline-block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;">' + slice2[i] + '</p></div>');
            }
            ////////////////HSL STOP 2/////////////////////

        });
}

/*
function HSL_Otakallio_haku() {
     $("#hsl_kohde2").empty();
     $("#hsl_aikataulu2").empty();
     $("#hsl_bussit2").empty();

    fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
		mode: 'cors',
        body: JSON.stringify({ query: '{ stop(id:"HSL:2222203") { name, lat, lon  stoptimesWithoutPatterns(numberOfDepartures:3) {scheduledDeparture, trip{tripHeadsign, route{shortName}   }}}} '}),
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


}*/
/*
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

function HSL_Alvar_Aallon_puistoP_haku() {
    $("#hsl_kohde8").empty();
    $("#hsl_aikataulu8").empty();
    $("#hsl_bussit8").empty();

    fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ query: '{ stop(id:"HSL:2222211") { name, lat, lon  stoptimesWithoutPatterns(numberOfDepartures:5) {scheduledDeparture, trip{tripHeadsign, route{shortName}   }}}} '}),
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

        $('#hsl_bussit8').append('<li>' + buss + '</li>');
        $('#hsl_kohde8').append('<li>' + destination + '</li>');
        $('#hsl_aikataulu8').append('<li>' + slice + '</li>');

    }
});
}

function HSL_Alvar_Aallon_puistoE_haku() {
    $("#hsl_kohde9").empty();
    $("#hsl_aikataulu9").empty();
    $("#hsl_bussit9").empty();

    fetch('https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ query: '{ stop(id:"HSL:2222235") { name, lat, lon  stoptimesWithoutPatterns(numberOfDepartures:5) {scheduledDeparture, trip{tripHeadsign, route{shortName}   }}}} '}),
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

        $('#hsl_bussit9').append('<li>' + buss + '</li>');
        $('#hsl_kohde9').append('<li>' + destination + '</li>');
        $('#hsl_aikataulu9').append('<li>' + slice + '</li>');

    }
});
}*/