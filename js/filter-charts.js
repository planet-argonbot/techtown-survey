(function() {
  var charts = {
    defaults: {
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

    chart: function(name, selector, data, options) {
      this.name = name;
      this.selector = selector;
      this.data = data;
      this.options = options;
    },
  };

  var chartsData = [
    {
      name: "techPos",
      selector: ".ct-chart",
      data: {
        labels: ['Male', 'Female', 'Non-Conforming'],
        series: [468, 130, 19]
      },
      options: charts.defaults
    },
    {
      name: "nonTechPos",
      selector: ".ct-chart1",
      data: {
        labels: ['Male', 'Female', 'Non-Conforming'],
        series: [346, 285, 14]
      },
      options: charts.defaults
    },
    {
      name: "leaderPos",
      selector: ".ct-chart2",
      data: {
        labels: ['Male', 'Female', 'Non-Conforming'],
        series: [102, 56, 3]
      },
      options: charts.defaults
    },
    {
      name: "managementPos",
      selector: ".ct-chart3",
      data: {
        labels: ['Male', 'Female', 'Non-Conforming'],
        series: [132, 85, 8]
      },
      options: charts.defaults
    }
  ];

  var build = {
    init: function() {
      var self = this;
      $.each(chartsData, function(index, value) {
        self.createChart(value.selector, value.data, value.options, value.options.options, value.options.responsiveOptions);
      });
    },

    createChart: function(target, data, options, responsiveOptions) {
      new Chartist.Pie(target, data, options, responsiveOptions);
    }
  };

  $(document).ready(function() {
    build.init();
  });
})();

