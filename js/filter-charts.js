var Survey = (function() {
  var chartsDone = document.createEvent('Event');
  chartsDone.initEvent('charts-done', true, true);
  var build = {
    init: function() {
      var self = this;

      this.buildCharts("gender");
    },

    buildCharts: function(selectedCharts, chartSection) {
      var self = this;
      var charts;
      if (chartSection) {
        charts = selectedCharts;
      } else {
        // this only happens upon init build
        charts = [];
        for (var selector in chartsData) {
          chartsData[selector][selectedCharts].map(function(chart) {
            charts.push(chart);
          });
        }
      }
      $.each(charts, function(index, chart) {
        if (chartsData[chart.name] !== undefined) {
          chartsData[chart.name].detach();
          // clearing html
          $(chart.selector).html('');
        }
        if (chart.type === 'bar') {
          chartsData[chart.name] = new Chartist.Bar(chart.selector, chart.data);
        } else {
          chartsData[chart.name] = new Chartist.Pie(chart.selector, chart.data, chart.options.options, chart.options.responsiveOptions);
        }
        // running the chartsDone event after last chart is created
        chartsData[chart.name].on('created', function(e) {
          if (index === charts.length - 1) {
            document.dispatchEvent(chartsDone);
          }
        });
      });
    },

    updateCharts: function(filter, chartSection) {
      this.buildCharts(chartsData[chartSection][filter], chartSection);
    },
  };

  // module pattern
  // https://toddmotto.com/mastering-the-module-pattern/
  return {
    build: build,
    chartsData: chartsData
  };
})();

