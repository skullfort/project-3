// BAR LINE CHART
let trace1 = {
  x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
  y: [16169, 20397, 58551, 128209, 344635, 470732, 366120, 412283, 383239, 334133, 215048, 123342],
  name: 'Casual Member User Count',
  type: "bar",
  yaxis: 'y1'
};

// Create second trace for member counts
let trace2 = {
  x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
  y: [40218, 46436, 93130, 117319, 159406, 133901, 312619, 291325, 217861, 164144, 104250, 56168],
  name: 'Annual Member User Count',
  type: "bar",
  yaxis: 'y1'
};

// Create our duration trace for casuals
let trace3 = {
  x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
  y: [972.0055662069, 888.3816247487, 989.8579528958, 1098.639370091, 1150.8200937223, 1068.2638146546, 1252.4768737026, 1161.170967515, 1041.672666404, 918.7095587685, 851.950336669, 794.9204974786,],
  name: 'Casual Member Duration',
  type: "scatter",
  yaxis: 'y2'
};

// Create our duration trace for members
let trace4 = {
  x: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Nov", "Dec"],
  y: [668.1730071112, 641.0504996124, 637.6856866745, 663.6483775007, 723.1278433685, 714.6819067819, 736.9871153065, 727.6911250322, 715.0041264843, 670.1628204503, 658.0061103118, 632.845873095],
  name: 'Annual Member Duration',
  type: "scatter",
  yaxis: 'y2'
};

// The data array consists of all traces
let data = [trace1, trace2, trace3, trace4];

let layout = {
  title: 'Casual vs. Annual Members Monthly User Count and Duration',
  yaxis: {title: 'User Count'},
  yaxis2: {
    title: 'Duration (seconds)',
    overlaying: 'y',
    side: 'right'
  }
};

// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot", data, layout);







// LINE GRAPH
// Data and layout for the second graph
let data1 = [{
  x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  y: [343805, 372793, 389139, 395644, 405978, 523208, 442291],
  name: 'Casual Members',
  type: 'bar',
  yaxis: 'y1'
}];

let data2 = [{
  x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  y: [224547, 263368, 273170, 274280, 254482, 240962, 205968],
  name: 'Annual Members',
  type: 'bar',
  yaxis: 'y1'
}]; 

let data3 = [{
  x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  y: [1011.111382906,965.099808741,964.1097345679,977.7582725885,1037.9025489066,1212.0639554441,1202.6074530117],
  name: 'Annual Members',
  type: 'scatter',
  yaxis: 'y2'
}];

let data0 = [{
  x: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  y: [674.6071379266,682.8943037879,686.4112823516,693.6473895289,696.0181270188,748.0477170674,731.6343266915],
  name: 'Annual Members',
  type: 'scatter',
  yaxis: 'y2'
}];

let datas = [data1[0], data2[0], data3[0], data0[0]];

let layout2 = {
  title: 'Days of the Week of Casual vs. Members',
  yaxis: {title: 'User Count'},
  yaxis2: {
    title: 'Duration (seconds)',
    overlaying: 'y',
    side: 'right'
  },
  barmode: 'stack'
};

// Create the second plot
Plotly.newPlot('plot2', datas, layout2);







//BAR LINE GRAPH
var data4 = [
  {
    x: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
    y: [49818,32460,25008,13190,8207,11593,30735,64950,125418,101901,99249,125025,155238,169999,181210,199630,232649,284724,265619,217499,167354,129061,101521,80800],
    type: 'bar',
    name: 'Casual User Count',
    yaxis: 'y1'
  },
  {
    x: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
    y: [26079,16507,11693,6531,5128,10246,29987,62286,110585,84052,69181,78355,92469,94734,95225,107367,135103,174425,154736,119074,88888,68959,53870,41297],
    type: 'bar',
    name: 'Member User Count',
    yaxis: 'y1'
  },
  {
    x: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
    y: [1095.8660524308,1154.0751694393,1205.1556701855,1143.5477634572,995.0671378092,889.5534374191,776.1433219457,825.9190916089,833.4550144317,882.3653251685,988.1195377283,1059.89094981,1068.18635901,1093.6496508803,1137.1865735887,1131.60095677,1096.3646953135,1065.2186749273,1085.7175992681,1112.8290934671,1107.4069636818,1084.4871804805,1088.5100225569,1117.2122772277],
    type: 'scatter',
    name: 'Casual Duration',
    yaxis: 'y2'
  },
  {
    x: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
    y: [704.0733156946,676.7642818198,693.8893354999,707.4595008421,646.2542901716,595.1969549092,601.6234701704,652.9107182995,689.0553601302,656.7782682149,659.2524247987,668.8357092719,667.5620694503,680.334272806,701.9466211604,705.2330883791,714.1142461677,728.5874845922,731.7560490125,730.6158187346,730.1550828008,732.3915370002,736.7869871914,719.9043271908],
    type: 'scatter',
    name: 'Member Duration',
    yaxis: 'y2'
  }
];


// Define your layout options
var layout4 = {
  title: 'Hourly Average of Casual vs. Members',
  yaxis: {title: 'User Count'},
  yaxis2: {
    title: 'Duration (seconds)',
    overlaying: 'y',
    side: 'right'
  },
  barmode: 'stack'
};

// Plot the chart with your data and layout options
Plotly.newPlot('myChart', data4, layout4);

