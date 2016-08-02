var Survey = (function() {
  // creates an event and initializes
  // does not trigger here
  var chartsDone = document.createEvent('Event');
  chartsDone.initEvent('charts-done', true, true);

  var build = {
    init: function() {
      var self = this;

      this.buildCharts("gender");
    },

    updateCharts: function(filter, chartSection) {
      this.buildCharts(chartsData[chartSection][filter], chartSection);
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
        // rewrites values as percentages
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
          chartsData[chart.name] = new Chartist.Bar(chart.selector, chart.data, chart.options.options, chart.options.responsiveOptions);
        } else {
          chartsData[chart.name] = new Chartist.Pie(chart.selector, chart.data, chart.options.options, chart.options.responsiveOptions);
        }

        // running the chartsDone event after last chart is created
        chartsData[chart.name].on('created', function(e) {
          if (index === charts.length - 1) {
            document.dispatchEvent(chartsDone);
          }
        });

        if (chart.type !== 'bar') {
          chartsData[chart.name].on('draw', function(data) {
            self.animatePie(data);
          });
        }
      });
    },

    add: function(num1, num2) {
      return num1 + num2;
    },

    animatePie: function(data) {
      if(data.type === 'slice') {
        if (data.index === 0) {
          data.element.addClass("animated-slice");
          debugger;
        }

        // Get the total path length in order to use for dash array animation
        var pathLength = data.element._node.getTotalLength();

        // Set a dasharray that matches the path length as prerequisite to animate dashoffset
        data.element.attr({
            'stroke-dasharray': pathLength + 'px ' + pathLength + 'px',
            'stroke-dashoffset': -pathLength + 'px'
        });
      }
    },
  };

  // module pattern
  // https://toddmotto.com/mastering-the-module-pattern/
  return {
    build: build,
    chartsData: chartsData
  };
})();

