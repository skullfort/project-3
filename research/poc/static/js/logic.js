let stationMap = L.map('map-id',{
  center: [43.7001, -79.4163], // toronto [lat, lon]
  zoom: 13,
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(stationMap);

const stationURL = 'https://tor.publicbikesystem.net/ube/gbfs/v1/en/station_information';

//
let bikeIcon = L.ExtraMarkers.icon({
  icon: "ion-android-bicycle",
  iconColor: "white",
  markerColor: "red",
  shape: "circle"
});

// Perform an API call to the Toronto Bike Station API to get the station information.
d3.json(stationURL).then(
  function (stationRes) {
    // Pull the "stations" property from stationRes.data.
    let stations = stationRes.data.stations;

    // Initialize an array to hold the bike markers.
    let stationMarkers = [];

    // Loop through the stations array.
    for (let station of stations) {
      // For each station, create a marker, and bind a popup with the station's name.
      let stationMarker = L.marker([station.lat, station.lon], {icon: bikeIcon}).bindPopup(`${station.station_id} <br> ${station.name}`);

      // Add the marker to the stationMarkers array.
      stationMarkers.push(stationMarker);
    }

    // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
    L.layerGroup(stationMarkers).addTo(stationMap);
  }
)