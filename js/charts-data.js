 var chartOptions = {
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
    workforce: ['Survey results', 'Software/Tech', 'All Industries', 'General Population']
  }
};

 var chartsData = {
  position: {
    gender: [
      {
        name: "techPos",
        selector: ".ct-chart",
        type: "pie",
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
        percentage: true,
        data: {
          labels: chartOptions.labels.gender,
          series: [346, 285, 14]
        },
        options: chartOptions.pie
      },
      {
        name: "leaderPos",
        selector: ".ct-chart2",
        type: "pie",
        percentage: true,
        data: {
          labels: chartOptions.labels.gender,
          series: [102, 56, 3]
        },
        options: chartOptions.pie
      },
      {
        name: "managementPos",
        selector: ".ct-chart3",
        type: "pie",
        percentage: true,
        data: {
          labels: chartOptions.labels.gender,
          series: [132, 85, 8]
        },
        options: chartOptions.pie
      },
    ],
    race: [
      {
        name: "techPos",
        selector: ".ct-chart",
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
        percentage: true,
        type: 'bar',
        data: {
          labels: chartOptions.labels.race,
          series: [[18, 3, 5, 138, 7, 2, 3]]
        },
        options: chartOptions.bar
      },
      {
        name: "managementPos",
        selector: ".ct-chart3",
        percentage: true,
        type: 'bar',
        data: {
          labels: chartOptions.labels.race,
          series: [[19, 7, 12, 199, 3, 4, 4, 4]]
        },
        options: chartOptions.bar
      }
    ],
    education: [
      {
        name: "techPos",
        selector: ".ct-chart",
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
        percentage: true,
        type: 'bar',
        data: {
          labels: chartOptions.labels.education,
          series: [[1, 38, 3, 29, 450, 114]]
        },
        options: chartOptions.bar
      },
      {
        name: "leaderPos",
        selector: ".ct-chart2",
        percentage: true,
        type: 'bar',
        data: {
          labels: chartOptions.labels.education,
          series: [[1, 13, 3, 5, 100, 37]]
        },
        options: chartOptions.bar
      },
      {
        name: "managementPos",
        selector: ".ct-chart3",
        percentage: true,
        type: 'bar',
        data: {
          labels: chartOptions.labels.education,
          series: [[0, 7, 1, 13, 145, 56]]
        },
        options: chartOptions.bar
      }
    ],
    age: [
      {
        name: "techPos",
        selector: ".ct-chart",
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
        percentage: true,
        type: 'bar',
        data: {
          labels: chartOptions.labels.age,
          series: [[1, 35, 92, 28, 4, 0]]
        },
        options: chartOptions.bar
      },
      {
        name: "managementPos",
        selector: ".ct-chart3",
        percentage: true,
        type: 'bar',
        data: {
          labels: chartOptions.labels.age,
          series: [[2, 93, 88, 36, 4, 1]]
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
