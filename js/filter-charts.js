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
        // this clears and detaches events from previously rendered charts
        if (chartsData[chart.name] !== undefined) {
          chartsData[chart.name].detach();
          // clearing html
          $(chart.selector).html('');
        }
        if (chart.percentage === true) {
          var selectedSeries;

          if (chart.type === 'bar') {
            selectedSeries = chart.data.series[0];
          } else {
            selectedSeries = chart.data.series;
          }

          var seriesArray = [];
          var total = selectedSeries.reduce(self.add, 0);

          // creates percentage based on value and total values
          for (var i in selectedSeries) {
            seriesArray.push(Math.round(selectedSeries[i] / total * 100));
          }
          // reassigns series
          if (chart.type === 'bar') {
            chart.data.series = [seriesArray];
          } else {
            chart.data.series = seriesArray;
          }
        }
        if (chart.type === 'bar') {
          chartsData[chart.name] = new Chartist.Bar(chart.selector, chart.data, chart.options);
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

    add: function(num1, num2) {
      return num1 + num2;
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

