let baseMaps = {
  'Street': L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}),
  'Dark': L.esri.basemapLayer('DarkGray')
};

//
let bikeIcons = {
  '2021': L.ExtraMarkers.icon({
    icon: "ion-android-bicycle",
    iconColor: "white",
    markerColor: "red",
    shape: "circle"
  }),
  '2022': L.ExtraMarkers.icon({
    icon: "ion-android-bicycle",
    iconColor: "white",
    markerColor: "green",
    shape: "circle",
  })
};

d3.json(url).then(
  function (stationRes) {
    let stations = stationRes[0].stations;
    let percentColors = chroma.scale('OrRd').colors(6); 
    let durColors = chroma.scale(['008ae5', 'yellow']).domain([0, 30]);
    
    // 2021
    // Initialize arrays.
    let stationMarkers2021 = [];
    let percentMarkers2021 = [];
    let durMarkers2021 = [];
    for (let value of Object.values(stations['2021'])) {
      let percentMarker = L.circle([value.Lat, value.Lon], {
        radius: (Math.sqrt(value['Yearly Total Trips']))*1.5,
        color: percentColors[Math.floor(value['Yearly Casual Trip Percentage']/20)],
        fillOpacity: 0.8
      }).bindPopup(`2021 Yearly Trip Count <hr> ${value['Yearly Total Trips']}`);
      percentMarkers2021.push(percentMarker);

      let durMarker = L.circle([value.Lat, value.Lon], {
        radius: (Math.sqrt(value['June Casual Trips']))*3,
        color: durColors(value['June Casual Trip Average Duration']/60),
        fillOpacity: 0.9
      }).bindPopup(`2021 June Casual Trip Count <hr> ${value['June Casual Trips']}`);
      durMarkers2021.push(durMarker);
    }
    let percentLayer2021 = L.layerGroup(percentMarkers2021);
    let durLayer2021 = L.layerGroup(durMarkers2021);

    // 2022
    // Initialize arrays.
    let stationMarkers2022 = [];
    let percentMarkers2022 = [];
    let durMarkers2022 = [];
    for (let [key, value] of Object.entries(stations['2022'])) {
      // For each station, create a marker, and bind a popup with the station's name.
      if (Object.keys(stations['2021']).includes(key)) {
        let stationMarker = L.marker([value.Lat, value.Lon], {icon: bikeIcons['2021']}).bindPopup(`${key} <br> ${value.Name}`);
        stationMarkers2021.push(stationMarker);
      } else {
        let stationMarker = L.marker([value.Lat, value.Lon], {icon: bikeIcons['2022']}).bindPopup(`${key} <br> ${value.Name}`);
        stationMarkers2022.push(stationMarker);
      }

      let percentMarker = L.circle([value.Lat, value.Lon], {
        radius: (Math.sqrt(value['Yearly Total Trips']))*1.5,
        color: percentColors[Math.floor(value['Yearly Casual Trip Percentage']/20)],
        fillOpacity: 0.8
      }).bindPopup(`2022 Yearly Trip Count <hr> ${value['Yearly Total Trips']}`);
      percentMarkers2022.push(percentMarker);

      let durMarker = L.circle([value.Lat, value.Lon], {
        radius: (Math.sqrt(value['June Casual Trips']))*3,
        color: durColors(value['June Casual Trip Average Duration']/60),
        fillOpacity: 0.9
      }).bindPopup(`2022 June Casual Trip Count <hr> ${value['June Casual Trips']}`);;
      durMarkers2022.push(durMarker);
    }
    let percentLayer2022 = L.layerGroup(percentMarkers2022);
    let durLayer2022 = L.layerGroup(durMarkers2022);

    d3.json(flowmapURL).then(
      function (flowmapRes) {
        let flowMapOverlay = L.canvasFlowmapLayer(flowmapRes[0], {
          originAndDestinationFieldIds: {
            originUniqueIdField: 'origin_id',
            originGeometry: {
              x: 'origin_lon',
              y: 'origin_lat'
            },
            destinationUniqueIdField: 'destination_id',
            destinationGeometry: {
              x: 'destination_lon',
              y: 'destination_lat'
            }
          },
          pathDisplayMode: 'all',
          animationStarted: true,
          animationEasingFamily: 'Cubic',
          animationEasingType: 'In',
          animationDuration: 5000
        });

        let overlayMaps = {
          '2021': {
            '2021 Stations': L.layerGroup(stationMarkers2021),
            'Yearly Casual Trip Percentage': percentLayer2021,
            'June Casual Trip Average Duration': durLayer2021
          },
          '2022': {
            '2022 Additions': L.layerGroup(stationMarkers2022),
            'Yearly Casual Trip Percentage': percentLayer2022,
            'June Casual Trip Average Duration': durLayer2022,
            'Morning Rush Hour Flow Map': flowMapOverlay
          }
        }

        let stationMap = L.map('map',{
          center: [43.7001, -79.4163], // toronto [lat, lon]
          zoom: 13,
          layers: baseMaps.Street
        });

        let percentLegend = L.control({position: 'bottomleft'});
        percentLegend.onAdd = function () {
          let div = L.DomUtil.create('div', 'info legend');
          let percents = [0, 20, 40, 60, 80];
          for (let i = 0; i < percents.length; i++) {
            div.innerHTML += 
              '<i style="background:' + percentColors[i] + '"></i>' + 
              percents[i] + (percents[i + 1] ? '&ndash;' + percents[i + 1] + '%<br>' : '%+');
          }
          return div;
        }

        let durLegend = L.control({position: 'bottomright'});
        durLegend.onAdd = function () {
          let div = L.DomUtil.create('div', 'info legend');
          let durs = [0, 5, 10, 15, 20, 25, 30];
          for (var i = 0; i < durs.length; i++) {
            div.innerHTML += 
              '<i style="background:' + durColors(durs[i]) + '"></i>' + 
              durs[i] + (durs[i + 1] ? '&ndash;' + durs[i + 1] + ' min<br>' : ' min+');
          }
          return div;
        }
        
        L.control.groupedLayers(baseMaps, overlayMaps, {collapsed: false}).addTo(stationMap);

        // Legend control
        stationMap.on({
          overlayadd: function (event) {
            if (event.name === 'Yearly Casual Trip Percentage' && (!stationMap.hasLayer(percentLayer2021) || !stationMap.hasLayer(percentLayer2022))) { 
              percentLegend.addTo(stationMap);
            } else if (event.name === 'June Casual Trip Average Duration' && (!stationMap.hasLayer(durLayer2021) || !stationMap.hasLayer(durLayer2022))) { 
              durLegend.addTo(stationMap);
            }
          },
          overlayremove: function (event) {
            if (event.name === 'Yearly Casual Trip Percentage' && (!stationMap.hasLayer(percentLayer2021) && !stationMap.hasLayer(percentLayer2022))) {
              stationMap.removeControl(percentLegend);
            } else if (event.name === 'June Casual Trip Average Duration' && (!stationMap.hasLayer(durLayer2021) && !stationMap.hasLayer(durLayer2022))) {
              stationMap.removeControl(durLegend);
            }
          },
        })
    })
  }
)