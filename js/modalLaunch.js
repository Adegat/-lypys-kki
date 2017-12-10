         $("#go").leanModal(); //launches info modal on click 
            
         function muutakoko(){ //change map size to larger and hide other elements on page
                    var kartta = document.getElementById("map");
                    var chili = document.getElementById("chili")
                    var value = $(this).html();
                    if(value != '<i class="fa fa-minus-circle" aria-hidden="true"></i>'){
                        $(this).html('<i class="fa fa-minus-circle" aria-hidden="true"></i>');
                        $(kartta).toggleClass('fullscreen map');
                        $(chili).addClass('katoa');
						var pressed = 1;
                        initMap(pressed);
                        return false;
                    }else{
                        $(this).html('<i class="fa fa-plus-circle" aria-hidden="true"></i>');
                        $(kartta).toggleClass('map fullscreen');
                        $(chili).removeClass('katoa');
                        initMap();
                    }
         }
         $('#resize').click(muutakoko);