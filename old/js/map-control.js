window.onload = function () {

  // Instantiate new map object, place it in 'map' element -- Uses Leaflet.js
     var map_object = new L.Map('map', {
        center: [-34.0000,18.5800], // Starting Point - set to Johannesburg
        zoom: 12
     });


var layerSource = {
    user_name: 'adi45',
    type: 'cartodb',
    sublayers: [{
    sql: "SELECT * FROM metropolitan_suburbs_region", // IS Region -- Upgrade Category
    cartocss: '#metropolitan_suburbs_region {polygon-opacity: 0.7;line-color: #3E7BB6;line-width: 0.3;line-opacity: 1;}#metropolitan_suburbs_region[majoritary="AFRICAN/BLACK"]{polygon-fill: #c7eae5;}#metropolitan_suburbs_region[majoritary="ASIAN"]{polygon-fill: #f6e8c3;}#metropolitan_suburbs_region[majoritary="COLOURED"]{polygon-fill: #bf812d;}#metropolitan_suburbs_region[majoritary="WHITE"]{polygon-fill: #35978f;}'}
    ]}


// For storing the sublayers
var sublayers = [];

// Pull tiles from OpenStreetMap
L.tileLayer('http://2.aerial.maps.cit.api.here.com/maptile/2.1/maptile/newest/satellite.day/{z}/{x}/{y}/256/png8', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map_object);

// Add data layer to your map
cartodb.createLayer(map_object,layerSource)
.addTo(map_object)
.done(function(layer) {
for (var i = 0; i < layer.getSubLayerCount(); i++) {
sublayers[i] = layer.getSubLayer(i);
//alert("Congrats, you added sublayer #" + i + "!");
} 
})
.error(function(err) {
console.log("error: " + err);
});

// Add button events Sublayer 0 - Upgrade Category
var sublayer0Shown = true;
$("#sublayer0").on('click', function() {
  if (sublayer0Shown) {
    sublayers[0].hide();
  } else {
    sublayers[0].show();
  }
  sublayer0Shown = !sublayer0Shown; 
});


} // closes function

