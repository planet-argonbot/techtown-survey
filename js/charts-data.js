 var chartOptions = {
  techTotal: 617,
  nonTechTotal: 645,
  leaderTotal: 337,
  overallTotal: 1270,
  pie: {
    options: {
      donut: true,
      donutWidth: 20,
      labelOffset: 20,
      chartPadding: 0,
      labelInterpolationFnc: function(value, index) {
        return value;
      },
      plugins: [
        Chartist.plugins.tooltip({
          transformTooltipTextFnc: function(value) {
            return value + '%';
          }
        })
      ]
    },
    responsiveOptions: [
      ['screen and (min-width: 544px)', {
        labelOffset: 20,
        labelDirection: 'explode'
      }]
    ]
  },
  bar: {
    options: {
      axisY: {
        labelInterpolationFnc: function(value) {
          return value + ' %';
        },
      },
      plugins: [
        Chartist.plugins.tooltip({
          transformTooltipTextFnc: function(value) {
            return value + '%';
          }
        })
      ]
    },
    responsiveOptions: [
      ['screen and (max-width: 544px)', {
        seriesBarDistance: 10,
        fullWidth: true,
        height: '500px',
        reverseData: true,
        horizontalBars: true,
        axisY: {
          labelInterpolationFnc: function(value) {
            return value;
          },
          offset: 70
        }
      }]
    ]
  },
  workforce: {
    options: {
      seriesBarDistance: 20,
      axisX: {
        offset: 60
      },
      axisY: {
        offset: 80,
        labelInterpolationFnc: function(value) {
          return value + ' %';
        },
        scaleMinSpace: 15
      },
      plugins: [
        Chartist.plugins.tooltip({
          transformTooltipTextFnc: function(value) {
            return value + '%';
          }
        })
      ]
    },
    responsiveOptions: [
      ['screen and (max-width: 544px)', {
        seriesBarDistance: 25,
        fullWidth: true,
        height: '500px',
        reverseData: false,
        horizontalBars: true,
        axisY: {
          labelInterpolationFnc: function(value) {
            return value;
          },
          offset: 70
        }
      }]
    ]
  },
  // collection of labels here for less typos
  labels: {
    gender: ['Male', 'Female', 'Non-Conforming'],
    race: ['Asian', 'Black', 'Hispanic', 'White', 'American Indian', 'Pacific Islander', 'Slavic', 'Middle Eastern'],
    education: ['Less Than High School', 'High School', 'Code School', 'Associate', 'Bachelor', 'Graduate'],
    age: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
    workforce: ['Survey results', 'Software / Tech', 'All Industries', 'General Population']
  }
};

 var chartsData = {
  position: {
    gender: [
      {
        name: "techPos",
        selector: ".ct-chart",
        type: "pie",
        optTotal: chartOptions.techTotal,
        percentage: true,
        data: {
          labels: chartOptions.labels.gender,
          series: [468, 130, 19]
        },
        options: chartOptions.pie
      },
      {
        name: "nonTechPos",
        selector: ".ct-chart1",
        type: "pie",
        optTotal: chartOptions.NonTechTotal,
        percentage: true,
        data: {
          labels: chartOptions.labels.gender,
          series: [285, 346, 14]
        },
        options: chartOptions.pie
      },
      {
        name: "leaderPos",
        selector: ".ct-chart2",
        type: "pie",
        optTotal: chartOptions.leaderTotal,
        percentage: true,
        data: {
          labels: chartOptions.labels.gender,
          series: [205, 122, 10]
        },
        options: chartOptions.pie
      },
      {
        name: "overall",
        selector: ".ct-chart3",
        type: "pie",
        optTotal: chartOptions.overallTotal,
        percentage: true,
        data: {
          labels: chartOptions.labels.gender,
          series: [758, 479, 33]
        },
        options: chartOptions.pie
      },
    ],
    race: [
      {
        name: "techPos",
        selector: ".ct-chart",
        optTotal: chartOptions.techTotal,
        percentage: true,
        type: 'bar',
        data: {
          labels: chartOptions.labels.race,
          series: [[50, 20, 23, 533, 9, 3, 11, 8]]
        },
        options: chartOptions.bar
      },
      {
        name: "nonTechPos",
        selector: ".ct-chart1",
        optTotal: chartOptions.nonTechTotal,
        percentage: true,
        type: 'bar',
        data: {
          labels: chartOptions.labels.race,
          series: [[47, 13, 35, 553, 12, 5, 8, 5]]
        },
        options: chartOptions.bar
      },
      {
        name: "leaderPos",
        selector: ".ct-chart2",
        optTotal: chartOptions.leaderTotal,
        percentage: true,
        type: 'bar',
        data: {
          labels: chartOptions.labels.race,
          series: [[30, 9, 16, 295, 10, 5, 6, 6]]
        },
        options: chartOptions.bar
      },
      {
        name: "overall",
        selector: ".ct-chart3",
        optTotal: chartOptions.overallTotal,
        percentage: true,
        type: 'bar',
        data: {
          labels: chartOptions.labels.race,
          series: [[98, 33, 58, 1094, 21, 8, 20, 13]]
        },
        options: chartOptions.bar
      }
    ],
    education: [
      {
        name: "techPos",
        selector: ".ct-chart",
        optTotal: chartOptions.techTotal,
        percentage: true,
        type: 'bar',
        data: {
          labels: chartOptions.labels.education,
          series: [[2, 66, 19, 34, 377, 104]]
        },
        options: chartOptions.bar
      },
      {
        name: "nonTechPos",
        selector: ".ct-chart1",
        optTotal: chartOptions.nonTechTotal,
        percentage: true,
        type: 'bar',
        data: {
          labels: chartOptions.labels.education,
          series: [[0, 38, 3, 29, 450, 114]]
        },
        options: chartOptions.bar
      },
      {
        name: "leaderPos",
        selector: ".ct-chart2",
        optTotal: chartOptions.leaderTotal,
        percentage: true,
        type: 'bar',
        data: {
          labels: chartOptions.labels.education,
          series: [[1, 16, 4, 16, 215, 80]]
        },
        options: chartOptions.bar
      },
      {
        name: "overall",
        selector: ".ct-chart3",
        optTotal: chartOptions.overallTotal,
        percentage: true,
        type: 'bar',
        data: {
          labels: chartOptions.labels.education,
          series: [[2, 105, 22, 63, 832, 220]]
        },
        options: chartOptions.bar
      }
    ],
    age: [
      {
        name: "techPos",
        selector: ".ct-chart",
        optTotal: chartOptions.techTotal,
        percentage: true,
        type: 'bar',
        data: {
          labels: chartOptions.labels.age,
          series: [[36, 270, 206, 83, 9, 1]]
        },
        options: chartOptions.bar
      },
      {
        name: "nonTechPos",
        selector: ".ct-chart1",
        optTotal: chartOptions.nonTechTotal,
        percentage: true,
        type: 'bar',
        data: {
          labels: chartOptions.labels.age,
          series: [[56, 325, 185, 64, 9, 0]]
        },
        options: chartOptions.bar
      },
      {
        name: "leaderPos",
        selector: ".ct-chart2",
        optTotal: chartOptions.leaderTotal,
        percentage: true,
        type: 'bar',
        data: {
          labels: chartOptions.labels.age,
          series: [[2, 114, 150, 61, 7, 1]]
        },
        options: chartOptions.bar
      },
      {
        name: "overall",
        selector: ".ct-chart3",
        optTotal: chartOptions.overallTotal,
        percentage: true,
        type: 'bar',
        data: {
          labels: chartOptions.labels.age,
          series: [[93, 597, 396, 147, 18, 1]]
        },
        options: chartOptions.bar
      }
    ]
  },
  workforce: {
    race: [
      {
        name: "workforceRace",
        selector: ".workforce-chart",
        type: 'bar',
        data: {
          labels: chartOptions.labels.workforce,
          series: [
            [86, 84, 81, 83],
            [14, 16, 19, 17]
          ],
        },
        options: chartOptions.workforce
      }
    ],
    gender: [
      {
        name: "workforceGender",
        selector: ".workforce-chart",
        type: 'bar',
        data: {
          labels: chartOptions.labels.workforce,
          series: [
            [60, 67, 52, 48],
            [38, 33, 48, 51]
          ],
        },
        options: chartOptions.workforce
      }
    ]
  }
};
