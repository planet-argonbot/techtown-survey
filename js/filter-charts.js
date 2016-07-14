var Survey = function() {
  var charts = {
    _charts: this,

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

    chartCollection: [
      _charts.chart("techPos", ".ct-chart", [], _charts.defaults),
      _charts.chart("nonTechPos", ".ct-chart1", [], _charts.defaults),
      _charts.chart("leaderPos", ".ct-chart2", [], _charts.defaults),
      _charts.chart("managementPos", ".ct-chart3", [], _charts.defaults),
    ]
  };

  var build = {
    init: function() {
      // initialize charts here

    },


    createChart: function(target, data, options, responsiveOptions) {
      new Chartist.Pie(target, data, options, responsiveOptions);
    }
  };
};
