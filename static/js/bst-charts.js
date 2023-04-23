// Initialize webpage

// let url = './data/data_summary.json';

function init() {
  d3.json(url).then(
    function (Res) {
      let data = Res[0];
      console.log(data)
      // Make initial plots
      barplots(data['trip_count']);
    }
  )
};

function barplots(data) {

  //trace 1 casual trip count by month for 2021
  let casual_trip_count_by_month = months.map(x => data['2021']['Casual'][x])
  let trace1 = {
    x: months,
    y: casual_trip_count_by_month,
    legendgroup: 'count2021',
    name: 'Casual 2021',
    type: "bar",
    marker: {
      color: '#ffcc66'
    }
  };

  // trace 2 member trips count by month for 2021
  let member_trip_count_by_month = months.map(x => data['2021']['Member'][x])
  let trace2 = {
    x: months,
    y: member_trip_count_by_month,
    legendgroup: 'count2021',
    name: 'Member 2021',
    type: "bar",
    marker: {
      color: '#0099cc'
    }
  };
  //trace 3 casual trip count by month for 2022
  let casual_trip_count_by_month22 = months.map(x => data['2022']['Casual'][x])
  let trace3 = {
    x: months,
    y: casual_trip_count_by_month22,
    legendgroup: 'count2022',
    name: 'Casual 2022',
    type: "bar",
    marker: {
      color: '#ff9933'
    }
  };
  //trace 4 member trip count by month for 2022
  let member_trip_count_by_month22 = months.map(x => data['2022']['Member'][x])
  let trace4 = {
    x: months,
    y: member_trip_count_by_month22,
    legendgroup: 'count2022',
    name: 'Member 2022',
    type: "bar",
    marker: {
      color: '#0000ff'
    }
  };

  //trace 5 casual trip count by days for 2021
  let casual_trip_count_by_day = days.map(x => data['2021']['Casual'][x])
  let trace5 = {
    x: days,
    y: casual_trip_count_by_day,
    legendgroup: 'count2021',
    name: 'Casual 2021',
    type: "bar",
    marker: {
      color: '#ffcc66'
    }
  };

  // trace 6 member trips count by days for 2021
  let member_trip_count_by_day = days.map(x => data['2021']['Member'][x])
  let trace6 = {
    x: days,
    y: member_trip_count_by_day,
    legendgroup: 'count2021',
    name: 'Member 2021',
    type: "bar",
    marker: {
      color: '#0099cc'
    }
  };
  //trace 7 casual trip count by days for 2022
  let casual_trip_count_by_day22 = days.map(x => data['2022']['Casual'][x])
  let trace7 = {
    x: days,
    y: casual_trip_count_by_day22,
    legendgroup: 'count2022',
    name: 'Casual 2022',
    type: "bar",
    marker: {
      color: '#ff9933'
    }
  };
  //trace 8 member trip count by days for 2022
  let member_trip_count_by_day22 = days.map(x => data['2022']['Member'][x])
  let trace8 = {
    x: days,
    y: member_trip_count_by_day22,
    legendgroup: 'count2022',
    name: 'Member 2022',
    type: "bar",
    marker: {
      color: '#0000ff'
    }
  };
  //trace 9 casual trip count by hours for 2021
  let casual_trip_count_by_hours = hours.map(x => data['2021']['Casual'][x])
  let trace9 = {
    x: hours,
    y: casual_trip_count_by_hours,
    legendgroup: 'count2021',
    name: 'Casual 2021',
    type: "bar",
    marker: {
      color: '#ffcc66'
    }
  };

  // trace 10 member trips count by hours for 2021
  let member_trip_count_by_hours = hours.map(x => data['2021']['Member'][x])
  let trace10 = {
    x: hours,
    y: member_trip_count_by_hours,
    legendgroup: 'count2021',
    name: 'Member 2021',
    type: "bar",
    marker: {
      color: '#0099cc'
    }
  };
  //trace 11 casual trip count by hours for 2022
  let casual_trip_count_by_hours22 = hours.map(x => data['2022']['Casual'][x])
  let trace11 = {
    x: hours,
    y: casual_trip_count_by_hours22,
    legendgroup: 'count2022',
    name: 'Casual 2022',
    type: "bar",
    marker: {
      color: '#ff9933'
    }
  };
  //trace 12 member trip count by hours for 2022
  let member_trip_count_by_hours22 = hours.map(x => data['2022']['Member'][x])
  let trace12 = {
    x: hours,
    y: member_trip_count_by_hours22,
    legendgroup: 'count2022',
    name: 'Member 2022',
    type: "bar",
    marker: {
      color: '#0000ff'
    }
  };

  //Plot Monthly trip Count
  let dataMonthCount = [trace1, trace2, trace3, trace4];
  let layout = {
    title: {
      text: 'Monthly Trip Count of Casuals vs. Members',
      font: {
        family: 'Arial, sans-serif',
        size: 30,
        bold: true
      },
    },
    xaxis: {
      title: {
        text: 'Months',
        font: {
          family: 'Arial, sans-serif',
          size: 18,
          color: '#7f7f7f'
        }
      },
    },
    yaxis: {
      title: {
        text: 'Trip Count',
        font: {
          family: 'Arial, sans-serif',
          size: 18,
          color: '#7f7f7f'

        }
      },
      showlegend: true,
      legend: { "orientation": "h" },
      yaxis: { title: 'trip Count' },
    }
  };
  Plotly.newPlot("plot", dataMonthCount, layout);

  //Plotting Daily trip Count
  let dataDayCount = [trace5, trace6, trace7, trace8];
  let layout2 = {
    title: {
      text: 'Daily Trip Count of Casuals vs. Members',
      font: {
        family: 'Arial, sans-serif',
        size: 30,
        bold: true
      },
    },
    xaxis: {
      title: {
        text: 'Days of the Week',
        font: {
          family: 'Arial, sans-serif',
          size: 18,
          color: '#7f7f7f'
        }
      },
    },
    yaxis: {
      title: {
        text: 'Trip Count',
        font: {
          family: 'Arial, sans-serif',
          size: 18,
          color: '#7f7f7f'

        }
      },
      showlegend: true,
      legend: { "orientation": "h" },
      yaxis: { title: 'trip Count' },
    }
  };

  Plotly.newPlot("plot2", dataDayCount, layout2);

  //Plotting hourly trip Count
  let datahoursCount = [trace9, trace10, trace11, trace12];
  let layout3 = {
    title: {
      text: 'Hourly Trip Count of Casuals vs. Members',
      font: {
        family: 'Arial, sans-serif',
        size: 30,
        bold: true
      }
    },
    xaxis: {
      title: {
        text: 'Hours',
        font: {
          family: 'Arial, sans-serif',
          size: 18,
          color: '#7f7f7f'
        }
      },
      tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      ticktext: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'],
      categoryarray: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm']
    },
    yaxis: {
      title: {
        text: 'Trip Count',
        font: {
          family: 'Arial, sans-serif',
          size: 18,
          color: '#7f7f7f'

        }
      },
      showlegend: true,
      legend: { "orientation": "h" },
      yaxis: { title: 'trip Count' },
    }
  };
  Plotly.newPlot("plot3", datahoursCount, layout3);
};

function lineplots(data) {
  //trace 1 casual avg duration by month for 2021
  let casual_avg_dur_by_month = months.map(x => data['2021']['Casual'][x]).map(y => y / 60);
  let trace1 = {
    x: months,
    y: casual_avg_dur_by_month,
    legendgroup: 'dur2021',
    name: 'Casual 2021',
    type: "line",
    marker: {
      color: '#ffcc66'
    }
  };

  //trace 2 member avg duration by month for 2021
  let member_avg_dur_by_month = months.map(x => data['2021']['Member'][x]).map(y => y / 60);
  let trace2 = {
    x: months,
    y: member_avg_dur_by_month,
    legendgroup: 'dur2021',
    name: 'Member 2021',
    type: "line",
    marker: {
      color: '#0099cc'
    }
  };
  //trace 3 casual average duration by month for 2022
  let casual_avg_dur_by_month22 = months.map(x => data['2022']['Casual'][x]).map(y => y / 60);
  let trace3 = {
    x: months,
    y: casual_avg_dur_by_month22,
    legendgroup: 'dur2022',
    name: 'Casual 2022',
    type: "line",
    marker: {
      color: '#ff9933'
    }
  };
  //trace 4 member avg duration by month for 2022
  let member_avg_dur_by_month22 = months.map(x => data['2022']['Member'][x]).map(y => y / 60);
  let trace4 = {
    x: months,
    y: member_avg_dur_by_month22,
    legendgroup: 'dur2022',
    name: 'Member 2022',
    type: "line",
    marker: {
      color: '#0000ff'
    }
  };

  //trace 5 casual avg duration by days for 2021
  let casual_avg_dur_by_day = days.map(x => data['2021']['Casual'][x]).map(y => y / 60);
  let trace5 = {
    x: days,
    y: casual_avg_dur_by_day,
    legendgroup: 'dur2021',
    name: 'Casual 2021',
    type: "line",
    marker: {
      color: '#ffcc66'
    }
  };

  // trace 6 member average duration by days for 2021
  let member_avg_dur_by_day = days.map(x => data['2021']['Member'][x]).map(y => y / 60);
  let trace6 = {
    x: days,
    y: member_avg_dur_by_day,
    legendgroup: 'dur2021',
    name: 'Member 2021',
    type: "line",
    marker: {
      color: '#0099cc'
    }
  };
  //trace 7 casual average Duration by days for 2022
  let casual_avg_dur_by_day22 = days.map(x => data['2022']['Casual'][x]).map(y => y / 60);
  let trace7 = {
    x: days,
    y: casual_avg_dur_by_day22,
    legendgroup: 'dur2022',
    name: 'Casual 2022',
    type: "line",
    marker: {
      color: '#ff9933'
    }
  };
  //trace 8 member trip count by days for 2022
  let member_avg_dur_by_day22 = days.map(x => data['2022']['Member'][x]).map(y => y / 60);
  let trace8 = {
    x: days,
    y: member_avg_dur_by_day22,
    legendgroup: 'dur2022',
    name: 'Member 2022',
    type: "line",
    marker: {
      color: '#0000ff'
    }
  };
  //trace 9 casual avg duration by hours for 2021
  let casual_avg_dur_by_hours = hours.map(x => data['2021']['Casual'][x]).map(y => y / 60);
  let trace9 = {
    x: hours,
    y: casual_avg_dur_by_hours,
    legendgroup: 'dur2021',
    name: 'Casual 2021',
    type: "line",
    mode: "lines+markers",
    marker: {
      color: '#ffcc66'
    }
  };

  // trace 10 member trips count by hours for 2021
  let member_avg_dur_by_hours = hours.map(x => data['2021']['Member'][x]).map(y => y / 60);
  let trace10 = {
    x: hours,
    y: member_avg_dur_by_hours,
    legendgroup: 'dur2021',
    name: 'Member 2021',
    type: "line",
    mode: "lines+markers",
    marker: {
      color: '#0099cc'
    }
  };
  //trace 11 casual trip count by hours for 2022
  let casual_avg_dur_by_hours22 = hours.map(x => data['2022']['Casual'][x]).map(y => y / 60);
  let trace11 = {
    x: hours,
    y: casual_avg_dur_by_hours22,
    legendgroup: 'dur2022',
    name: 'Casual 2022',
    type: "line",
    mode: "lines+markers",
    marker: {
      color: '#ff9933'
    }
  };
  //trace 12 member trip count by hours for 2022
  let member_avg_dur_by_hours22 = hours.map(x => data['2022']['Member'][x]).map(y => y / 60);
  let trace12 = {
    x: hours,
    y: member_avg_dur_by_hours22,
    legendgroup: 'dur2022',
    name: 'Member 2022',
    type: "line",
    mode: "lines+markers",
    marker: {
      color: '#0000ff'
    }
  };

  //Plot Monthly Average Duration
  let dataMonthdur = [trace1, trace2, trace3, trace4];
  let layout = {
    title: {
      text: 'Monthly Average Trip Duration of Casuals vs. Members',
      font: {
        family: 'Arial, sans-serif',
        size: 30,
        bold: true
      }
    },
    xaxis: {
      title: {
        text: 'Months',
        font: {
          family: 'Arial, sans-serif',
          size: 18,
          color: '#7f7f7f'
        }
      },
    },
    yaxis: {
      title: {
        text: 'Average Trip Duration (minutes)',
        font: {
          family: 'Arial, sans-serif',
          size: 18,
          color: '#7f7f7f'

        }
      },
      showlegend: true,
      legend: { "orientation": "h" },
      yaxis: { title: 'Average Duration' },
    }
  };
  Plotly.newPlot("plot", dataMonthdur, layout);

  //Plotting Daily Avg Duration
  let dataDaydur = [trace5, trace6, trace7, trace8];
  let layout2 = {
    title: {
      text: 'Daily Average Trip Duration of Casuals vs. Members',
      font: {
        family: 'Arial, sans-serif',
        size: 30,
        bold: true
      }
    },
    xaxis: {
      title: {
        text: 'Days of the Week',
        font: {
          family: 'Arial, sans-serif',
          size: 18,
          color: '#7f7f7f'
        }
      },
    },
    yaxis: {
      title: {
        text: 'Average Trip Duration (minutes)',
        font: {
          family: 'Arial, sans-serif',
          size: 18,
          color: '#7f7f7f'

        }
      },
      showlegend: true,
      legend: { "orientation": "h" },
      yaxis: { title: 'Average Duration' },
    }
  };
  Plotly.newPlot("plot2", dataDaydur, layout2);

  //Plotting hourly Average Duration
  let datahoursdur = [trace9, trace10, trace11, trace12];
  let layout3 = {
    title: {
      text: 'Hourly Average Trip Duration of Casuals vs. Members',
      font: {
        family: 'Arial, sans-serif',
        size: 30,
        bold: true
      }
    },
    xaxis: {
      title: {
        text: 'Hours',
        font: {
          family: 'Arial, sans-serif',
          size: 18,
          color: '#7f7f7f'
        }
      },
      tickvals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
      ticktext: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'],
      categoryarray: ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm']
    },
    yaxis: {
      title: {
        text: 'Average Trip Duration (minutes)',
        font: {
          family: 'Arial, sans-serif',
          size: 18,
          color: '#7f7f7f'
        }
      },
      showlegend: true,
      legend: { "orientation": "h" },
      yaxis: { title: 'Average Duration' },
    }
  };
  Plotly.newPlot("plot3", datahoursdur, layout3);
};

// add event listener to the dropdown menu
function optionChanged(sel) {
  if (sel === 'Trip Count Analysis') {
    d3.json(url).then(
      function (Res) {
        let data = Res[0];
        barplots(data['trip_count']);
      }
    );
  } else if (sel === 'Average Trip Duration Analysis') {
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


