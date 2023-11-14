var map;
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 44.254930, lng: -88.413980},
    zoom: 17
  });

  var school = new google.maps.Marker({
    position: { lat: 41.8730, lng: -87.6279},
    map: map
  });

  var home = new google.maps.Marker({
    position: { lat: 41.868690, lng: -87.625380 },
    map: map
  });

  var distPoints = [
    { lat: 41.8730, lng: -87.6279 },
    { lat: 41.87299780452928, lng: -87.62762881329594 },
    { lat: 41.874529665029925, lng: -87.62765288743249 },
    { lat: 41.87455580971936, lng: -87.6290349675567 },
    { lat: 41.87470985506898, lng: -87.62902108075652 },
  ];

  var dist = new google.maps.Polyline({
    path: distPoints,
    geodesic: true,
    strokeColor: "#FE5F55",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  dist.setMap(map);

}

window.initMap = initMap;
