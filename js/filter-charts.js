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

        // don't alter series if has happened once on the page already
        if (!chart.calculated) {
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

          // adding meta information for tooltips to have labels
          var assignMeta = function(series, multi) {
            // for multi bar charts this gets a little more complex
            if (multi) {
              var seriesArr = [];
              series.forEach(function(value, index) {
                var valueArr = [];
                value.forEach(function(val, i) {
                  valueArr.push({meta: chart.data.labels[i], value: val});
                });
                seriesArr.push(valueArr);
              });
              seriesWithLabel = seriesArr;
            } else {
              series.forEach(function(value, index) {
                seriesWithLabel.push({meta: chart.data.labels[index], value: value});
              });
            }
          };

          var seriesWithLabel = [];
          var series;
          if (chart.data.series.length > 1) {
            series = chart.data.series;
            // if a multi bar chart
            if (Array.isArray(chart.data.series[0])) {
              assignMeta(series, true);
            } else {
              assignMeta(series);
            }
            chart.data.series = seriesWithLabel;
          } else {
            series = chart.data.series[0];
            assignMeta(series);
            chart.data.series = [seriesWithLabel];
          }
        }
        // this signifies that a chart should not be run through altering data.series
        chart.calculated = true;

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

        if (chart.type === 'pie') {
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
        // Get the total path length in order to use for dash array animation
        var pathLength = data.element._node.getTotalLength();

        // Set a dasharray that matches the path length as prerequisite to animate dashoffset
        data.element.attr({
          'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
        });

        // Create animation definition while also assigning an ID to the animation for later sync usage
        var animationDefinition = {
          'stroke-dashoffset': {
            id: 'anim' + data.index,
            dur: 400,
            from: -pathLength + 'px',
            to:  '0px',
            easing: Chartist.Svg.Easing.easeOutQuint,
            // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
            fill: 'freeze'
          }
        };

        // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
        if (data.index !== 0) {
          animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
        }

        // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
        data.element.attr({
          'stroke-dashoffset': -pathLength + 'px'
        });

        // We can't use guided mode as the animations need to rely on setting begin manually
        // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
        data.element.animate(animationDefinition, false);
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

