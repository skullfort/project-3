function init() {
  d3.json(url).then(function(data) {
    // Create new data structure
    console.log(data);
    let newData = convertData(data);
    console.log(newData);
    
    // Populate selection list
    let dropdown =d3.select("#selDataset")
    for (let country of Object.keys(newData)) {
      dropdown
        .append('option')
        .text(country)
        .property('value', country);
    }

    // Make pie chart
    let defaultdata = [{
      values: Object.values(newData.australia),
      labels: Object.keys(newData.australia),
      type: "pie"
    }];

    let layout = {
      height: 600,
      width: 800
    };

    Plotly.newPlot("pie", defaultdata, layout);
  })
}

function optionChanged(sel) {
  d3.json(url).then(function(data) {
    let newData = convertData(data);
    let dropdowndata = Object.values(newData[sel]);
    updatePlotly(dropdowndata);

    // Many other plots
  })
  
}

function convertData(oldData) {
  let newData = {};
  for (let row of oldData) {
    let {index, ...d} = row;
    newData[index] = d;   
  }
  return newData;
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("pie", "values", [newdata]);
}

init();





