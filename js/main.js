var map = L.map('map', {
  center: [41.365452651019396, -0.8721454581403625],
  zoom: 16,
  minZoom: 10,
  maxZoom: 20,
  layers: [osm, orto_foz]
});

var sectorStyle = {
  fillColor: '#127ae6',
  fillOpacity: 0.1,
  weight: 2,
  color: '#127ae6',
  opacity: 1,
}

    	/* global statesData */
        // Carga el archivo GeoJSON
      var sectorLayer = L.geoJSON(null, {
          style: sectorStyle,
          onEachFeature
      }
      ).addTo(map);
          
      $.getJSON("data/sectores.geojson",function(data){
          sectorLayer.addData(data);
      });
          
  
    function zoomToFeature(e) {
      map.fitBounds(e.target.getBounds());
    }
  
   
    function onEachFeature(feature, layer) {
      var name = feature.properties.name;
      var tooltip = L.tooltip({sticky: false}).setContent(name);
      
      layer.bindTooltip(tooltip);
      
  }
  

/*
$.ajax({
  url: './load_sectores.php',
  type: 'POST',
  success: function(response) {
    if (response.substring(0, 5) == "ERROR") {
      alert(response);
    } else {
      sectores = JSON.parse(response);

      var properties = {}; // Variable para almacenar los atributos

      L.geoJSON(sectores, {
        style: sectorStyle,
        onEachFeature: function(feature, layer) {
          layer.on('click', function(e) {
            var attributes = feature.properties;
            console.log(attributes);
            var popupContent = attributes.name;
            layer.bindPopup(popupContent).openPopup();
          });
        }
      }).addTo(map);

    }
  },
  
  error: function(xhr, status, error) {
    alert("ERROR: " + error);
    
  }
});

*/
var baseLayers = {
    "OpenStreeMap": osm,
    "PNOA": pnoa
};

var overLayers = {
    "Orto Foz": orto_foz,
};

var layerControl = L.control.layers(baseLayers, overLayers, {collapsed:true}).addTo(map);

// LOGO

var logoControl = L.control({position: 'bottomleft'});
logoControl.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'logo-control');
    div.innerHTML = '<img src="assets/liberam_blue_gradient.png" width="100px">';

// Asignar la URL al hacer clic en el logotipo
    div.addEventListener('click', function() {
        window.location.href = 'https://liberam.es'; // URL a la que se redirigirá
    });
 
    return div;
};

logoControl.addTo(map);