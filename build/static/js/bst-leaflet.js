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
    let countColors = chroma.scale(['008ae5', 'yellow']).domain([0, 5000]);
    
    // 2021
    // Initialize arrays.
    let stationMarkers2021 = [];
    let percentMarkers2021 = [];
    let countMarkers2021 = [];
    for (let value of Object.values(stations['2021'])) {
      let percentMarker = L.circle([value.Lat, value.Lon], {
        radius: (Math.sqrt(value['Yearly Total Trips']))*1.5,
        color: percentColors[Math.floor(value['Yearly Casual Trip Percentage']/20)],
        // dashArray: '4',
        fillOpacity: 0.8
        // color: getColor(value['Yearly Casual Trip Percentage'])
      }).bindPopup(`2021 Yearly Trip Count <hr> ${value['Yearly Total Trips']}`);
      percentMarkers2021.push(percentMarker);

      let countMarker = L.circle([value.Lat, value.Lon], {
        radius: value['June Casual Trip Average Duration']/60,
        // color: countColors[Math.floor(value['June Casual Trips']/500)],
        color: countColors(value['June Casual Trips']),
        fillOpacity: 0.9
      });
      countMarkers2021.push(countMarker);
    }
    let percentLayer2021 = L.layerGroup(percentMarkers2021);

    // 2022
    // Initialize arrays.
    let stationMarkers2022 = [];
    let percentMarkers2022 = [];
    let countMarkers2022 = [];
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
        // color: getColor(value['Yearly Casual Trip Percentage'])
      }).bindPopup(`2022 Yearly Trip Count <hr> ${value['Yearly Total Trips']}`);
      percentMarkers2022.push(percentMarker);

      let countMarker = L.circle([value.Lat, value.Lon], {
        radius: value['June Casual Trip Average Duration']/60,
        color: countColors(value['June Casual Trips']),
        // color: countColors[Math.floor(value['June Casual Trips']/500)],
        fillOpacity: 0.9
        // color: getColor(value['Yearly Casual Trip Percentage'])
      });
      countMarkers2022.push(countMarker);
    }
    let percentLayer2022 = L.layerGroup(percentMarkers2022);

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
            'June Casual Trip Count': L.layerGroup(countMarkers2021)
          },
          '2022': {
            '2022 Additions': L.layerGroup(stationMarkers2022),
            'Yearly Casual Trip Percentage': percentLayer2022,
            'June Casual Trip Count': L.layerGroup(countMarkers2022),
            'Morning Rush Hour Flow Map': flowMapOverlay
          }
        }

        let stationMap = L.map('map',{
          center: [43.7001, -79.4163], // toronto [lat, lon]
          zoom: 13,
          layers: baseMaps.Street
        });

        let percentLegend = L.control({position: 'bottomright'});
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

        // var percentLegend = L.control({position: 'bottomright'});
        // percentLegend.onAdd = function () {
        //   let div = L.DomUtil.create('div', 'info legend');
        //   let percents = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
        //   for (var i = 0; i < percents.length; i++) {
        //     div.innerHTML += 
        //       '<i style="background:' + percentColors[i] + '"></i>' + 
        //       percents[i] + (percents[i + 1] ? '&ndash;' + percents[i + 1] + '%<br>' : '+%');
        //   }
        //   return div;
        // }
        
        L.control.groupedLayers(baseMaps, overlayMaps, {collapsed: false}).addTo(stationMap);

        stationMap.on({
          overlayadd: function (event) {
            if (event.name === 'Yearly Casual Trip Percentage' && (!stationMap.hasLayer(percentLayer2021) || !stationMap.hasLayer(percentLayer2022))) { 
              percentLegend.addTo(stationMap);
            }
          },
          overlayremove: function (event) {
            if (event.name === 'Yearly Casual Trip Percentage' && (!stationMap.hasLayer(percentLayer2021) && !stationMap.hasLayer(percentLayer2022))) {
              stationMap.removeControl(percentLegend);
            }
          }
        })
    })
  }
)