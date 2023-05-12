var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var pnoa = L.tileLayer.wms('https://www.ign.es/wms-inspire/pnoa-ma',{
    layers: 'OI.OrthoimageCoverage',
    format: 'image/png',
    transparent: true,
    attribution: '&copy; Instituto Geográfico Nacional'
});

//var orto_foz = L.tileLayer.wms('https://liberam.synology.me:8443/geoserver/cremes/wms', {
// var orto_foz = L.tileLayer.wms('http://192.168.1.142:8600/geoserver/cremes/wms', {    
var orto_foz = L.tileLayer.wms('http://liberam.synology.me:8600/geoserver/cremes/wms', {
  layers: 'orto_foz',
  format: 'image/png',
  transparent: true,
  continuousWorld : true,
  identify: false,
  tiled: true,
  maxZoom: 20,
  attribution: '&copy; <a href="https://liberam.es">Liberam Technologies, S.L.</a>'

});






