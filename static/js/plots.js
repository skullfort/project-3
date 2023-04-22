// Initialize webpage
function init() {
  d3.json(url).then(
    function (Res) {
      let data = Res[0];
      console.log(data)
      // Make initial plots
      barplots(data['trip_count']);
    }
  )
}

function barplots(data) {
  let casual_user_count_by_month = months.map(x => data['2021']['Casual'][x])
  let trace = {
    x: months,
    y: casual_user_count_by_month,
    type: "bar"
  }
  Plotly.newPlot("bar", [trace]);
}

function lineplots(data) {
  // some kind of organization here
  let casual_avg_dur_by_dow = months.map(x => data['2021']['Casual'][x])
  let trace = {
    x: months,
    y: casual_avg_dur_by_dow,
    type: "line"
  }
  Plotly.newPlot("bar", [trace]);
}

// add event listener to the dropdown menu
function optionChanged(sel) {
  if (sel === 'User Count') {
    d3.json(url).then(
      function (Res) {
        let data = Res[0];
        barplots(data['trip_count']);
      }
    )
  } else if (sel === 'Average Trip Duration') {
    d3.json(url).then(
      function (Res) {
        let data = Res[0];
        lineplots(data['trip_avg_dur']);
      }
    )
  }
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

init()