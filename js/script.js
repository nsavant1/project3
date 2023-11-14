function initMap(){
var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.78955900248598, lng: -87.58266507470498},
    zoom: 12
  });

var marker = new google.maps.Marker({
    position: { lat: 41.78955900248598, lng: -87.58266507470498},
    map: map,
  });

var infowindow = new google.maps.InfoWindow({
    content:"This is the first place in Chicago where I went birding."
  });
  infowindow.open(map, marker);
  const icons = {
      bird: {
        icon: "images/crow.png",
      },
    }

    const features = [
        {
          position: new google.maps.LatLng(41.78878745952479, -87.61109759602186),
          type: "bird",
        },
        {
          position: new google.maps.LatLng(41.75037782566944, -87.53993446095399),
          type: "bird",
        },
        {
          position: new google.maps.LatLng(41.849664985553325, -87.61087453654768),
          type: "bird",
        },
        {
          position: new google.maps.LatLng(41.859966022804684, -87.60860108071138),
          type: "bird",
        },
        {
          position: new google.maps.LatLng(41.76857563405572, -87.56149110852199),
          type: "bird",
        },
        {
          position: new google.maps.LatLng(41.7600531884138, -87.5450162604763),
          type: "bird",
        },
        {
          position: new google.maps.LatLng(41.7382405099498, -87.53006425677482),
          type: "bird",
        },
    ];

    for (let i = 0; i < features.length; i++) {
      const marker = new google.maps.Marker({
        position: features[i].position,
        icon: icons[features[i].type].icon,
        map: map,
      });
    }
}

google.maps.event.addDomListener(window, 'load', initMap);
