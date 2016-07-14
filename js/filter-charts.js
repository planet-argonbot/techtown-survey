(function() {
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

    chartsData: [
      {
        name: "techPos",
        selector: ".ct-chart",
        data: {
          labels: [],
          series: []
        },
        options: _charts.defaults
      },
      {
        name: "nonTechPos",
        selector: ".ct-chart1",
        data: {
          labels: [],
          series: []
        },
        options: _charts.defaults
      },
      {
        name: "leaderPos",
        selector: ".ct-chart2",
        data: {
          labels: [],
          series: []
        },
        options: _charts.defaults
      },
      {
        name: "managementPos",
        selector: ".ct-chart3",
        data: {
          labels: [],
          series: []
        },
        options: _charts.defaults
      },
    ],

  };

  var build = {
    init: function() {
      $.each(charts.chartsData, function(index, value) {
        debugger;
      });
    },


    createChart: function(target, data, options, responsiveOptions) {
      new Chartist.Pie(target, data, options, responsiveOptions);
    }
  };

  build.init();
})();

