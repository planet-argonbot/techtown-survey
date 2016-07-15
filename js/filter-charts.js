var Survey = (function() {
  var charts = {
    defaults: {
      pie: {
        responsiveOptions: [
          ['screen and (min-width: 640px)', {
            chartPadding: 30,
            labelOffset: 100,
            labelDirection: 'explode',
            labelInterpolationFnc: function(value) {
              return value;
            }
          }],
          ['screen and (min-width: 1024px)', {
            labelOffset: 80,
            chartPadding: 20
          }]
        ],
        options: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        },
      },
      bar: {

      }
    },
  };

  var chartsData = {
    gender: [
      {
        name: "techPos",
        selector: ".ct-chart",
        data: {
          labels: ['Male', 'Female', 'Non-Conforming'],
          series: [468, 130, 19]
        },
        options: charts.defaults.pie
      },
      {
        name: "nonTechPos",
        selector: ".ct-chart1",
        data: {
          labels: ['Male', 'Female', 'Non-Conforming'],
          series: [346, 285, 14]
        },
        options: charts.defaults.pie
      },
      {
        name: "leaderPos",
        selector: ".ct-chart2",
        data: {
          labels: ['Male', 'Female', 'Non-Conforming'],
          series: [102, 56, 3]
        },
        options: charts.defaults.pie
      },
      {
        name: "managementPos",
        selector: ".ct-chart3",
        data: {
          labels: ['Male', 'Female', 'Non-Conforming'],
          series: [132, 85, 8]
        },
        options: charts.defaults.pie
      }
    ],
    race: [
      {
        name: "techPos",
        selector: ".ct-chart",
        type: 'bar',
        data: {
          labels: ['Male', 'Female', 'Non-Conforming'],
          series: [468, 130, 19]
        },
        options: charts.defaults.bar
      },
      {
        name: "nonTechPos",
        selector: ".ct-chart1",
        type: 'bar',
        data: {
          labels: ['Male', 'Female', 'Non-Conforming'],
          series: [346, 285, 14]
        },
        options: charts.defaults.bar
      },
      {
        name: "leaderPos",
        selector: ".ct-chart2",
        type: 'bar',
        data: {
          labels: ['Male', 'Female', 'Non-Conforming'],
          series: [102, 56, 3]
        },
        options: charts.defaults.bar
      },
      {
        name: "managementPos",
        selector: ".ct-chart3",
        type: 'bar',
        data: {
          labels: ['Male', 'Female', 'Non-Conforming'],
          series: [132, 85, 8]
        },
        options: charts.defaults.bar
      }
    ]
  };

  var build = {
    init: function() {
      var self = this;

      this.initializeCharts();
    },

    initializeCharts: function() {
      $.each(chartsData.gender, function(index, value) {
        chartsData[value.name] = new Chartist.Pie(value.selector, value.data, value.options);
      });
    },

    updateChart: function(chart, data, options) {
      chart.update(data, options);
    }
  };

  // module pattern
  // https://toddmotto.com/mastering-the-module-pattern/
  return {
    build: build,
    chartsData: chartsData
  };
})();

