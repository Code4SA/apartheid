window.onload = function() {
    var vizjson = 'https://adi45.cartodb.com/api/v2/viz/a961a80c-23e9-11e6-9ed3-0e8c56e2ffdb/viz.json';

    // Choose center and zoom level
    var options = {
        center: [-25.749306, 28.202061], // South Africa
        zoom: 10.5,
        scrollWheelZoom: false
    }

    // Instantiate map on specified DOM element
    var map_object = new L.Map('map', options);

    // Add a basemap to the map object just created
   /* L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: 'CartoDB'
    }).addTo(map_object);*/

    // Add CartoDB data layers
    cartodb.createLayer(map_object,vizjson)
        .addTo(map_object);

    //btn - metro switch

    // Default
    $("#pt").removeClass("hidden").show(); 

    // Joburg
    $(".btnJoburg").on('click', function() {
    map_object.setView([-26.204110, 28.038298],11);
    // hide info
    $("#ct").addClass("hidden").hide();
    $("#dbn").addClass("hidden").hide();
    $("#el").addClass("hidden").hide();
    $("#nl").addClass("hidden").hide();
    $("#pt").addClass("hidden").hide();
    $("#pe").addClass("hidden").hide();
    $("#pl").addClass("hidden").hide();
    $("#blf").addClass("hidden").hide();
    // show info
    $("#jb").removeClass("hidden").show();   
    });

    // Cape Town
    $(".btnCapeTown").on('click', function() {
    map_object.setView([-33.99943, 18.61679],11);
        // hide info
    $("#jb").addClass("hidden").hide();
    $("#dbn").addClass("hidden").hide();
    $("#el").addClass("hidden").hide();
    $("#nl").addClass("hidden").hide();
    $("#pt").addClass("hidden").hide();
    $("#pe").addClass("hidden").hide();
    $("#pl").addClass("hidden").hide();
    $("#blf").addClass("hidden").hide();
    // show info
    $("#ct").removeClass("hidden").show();    
    });

    //Durban
     $(".btnDurban").on('click', function() {
    map_object.setView([-29.857927, 31.022372],11);
        // hide info
    $("#jb").addClass("hidden").hide();
    $("#ct").addClass("hidden").hide();
    $("#el").addClass("hidden").hide();
    $("#nl").addClass("hidden").hide();
    $("#pt").addClass("hidden").hide();
    $("#pe").addClass("hidden").hide();
    $("#pl").addClass("hidden").hide();
    $("#blf").addClass("hidden").hide();
    // show info
    $("#dbn").removeClass("hidden").show();    
    });

    //East London
    $(".btnEastLondon").on('click', function() {
    map_object.setView([-33.028951, 27.855194],12);
    // hide info
    $("#ct").addClass("hidden").hide();
    $("#jb").addClass("hidden").hide();
    $("#nl").addClass("hidden").hide();
    $("#dbn").addClass("hidden").hide();
    $("#pt").addClass("hidden").hide();
    $("#pe").addClass("hidden").hide();
    $("#pl").addClass("hidden").hide();
    $("#blf").addClass("hidden").hide();
    // show info
    $("#el").removeClass("hidden").show();     
    });

    //Nelspruit
    $(".btnNelspruit").on('click', function() {
    map_object.setView([-25.479533, 30.974733],12);
    // hide info
    $("#ct").addClass("hidden").hide();
    $("#jb").addClass("hidden").hide();
    $("#el").addClass("hidden").hide();
    $("#dbn").addClass("hidden").hide();
    $("#pt").addClass("hidden").hide();
    $("#pe").addClass("hidden").hide();
    $("#pl").addClass("hidden").hide();
    $("#blf").addClass("hidden").hide();
    // show info
    $("#nl").removeClass("hidden").show();     
    });

    // Pretoria
    $(".btnPretoria").on('click', function() {
    map_object.setView([-25.749306, 28.202061],10);
    // hide info
    $("#ct").addClass("hidden").hide();
    $("#jb").addClass("hidden").hide();
    $("#el").addClass("hidden").hide();
    $("#nl").addClass("hidden").hide();
    $("#dbn").addClass("hidden").hide();
    $("#pe").addClass("hidden").hide();
    $("#pl").addClass("hidden").hide();
    $("#blf").addClass("hidden").hide();
    // show info
    $("#pt").removeClass("hidden").show();     
    });

    // Port Elizabeth
    $(".btnPortElizabeth").on('click', function() {
    map_object.setView([-33.913990, 25.519156],11);
    // hide info
    $("#ct").addClass("hidden").hide();
    $("#jb").addClass("hidden").hide();
    $("#el").addClass("hidden").hide();
    $("#nl").addClass("hidden").hide();
    $("#pt").addClass("hidden").hide();
    $("#dbn").addClass("hidden").hide();
    $("#pl").addClass("hidden").hide();
    $("#blf").addClass("hidden").hide();
    // show info
    $("#pe").removeClass("hidden").show();    
    });

    // Polokwane
    $(".btnPolokwane").on('click', function() {
    map_object.setView([-23.903600, 29.450417],12);
    // hide info
    $("#ct").addClass("hidden").hide();
    $("#jb").addClass("hidden").hide();
    $("#el").addClass("hidden").hide();
    $("#nl").addClass("hidden").hide();
    $("#pt").addClass("hidden").hide();
    $("#pe").addClass("hidden").hide();
    $("#dbn").addClass("hidden").hide();
    $("#blf").addClass("hidden").hide();
    // show info
    $("#pl").removeClass("hidden").show();    
    });

    //Bloemfontein
    $(".btnBloemfontein").on('click', function() {
    map_object.setView([-29.119934, 26.225125],11);
    // hide info
    $("#ct").addClass("hidden").hide();
    $("#jb").addClass("hidden").hide();
    $("#el").addClass("hidden").hide();
    $("#nl").addClass("hidden").hide();
    $("#pt").addClass("hidden").hide();
    $("#pe").addClass("hidden").hide();
    $("#pl").addClass("hidden").hide();
    $("#dbn").addClass("hidden").hide();
    // show info
    $("#blf").removeClass("hidden").show();     
    });

}



 
