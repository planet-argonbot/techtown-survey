var Survey = (function() {
  var chartsDone = document.createEvent('Event');
  chartsDone.initEvent('charts-done', true, true);

  console.log('initevent should fire');
  var build = {
    init: function() {
      var self = this;


      this.buildCharts(chartsData.gender);
    },

    buildCharts: function(selectedCharts) {
      $.each(selectedCharts, function(index, value) {
        if (chartsData[value.name] !== undefined) {
          chartsData[value.name].detach();
          // clearing html
          $(value.selector).html('');
        }
        if (value.type === 'bar') {
          chartsData[value.name] = new Chartist.Bar(value.selector, value.data);
        } else {
          chartsData[value.name] = new Chartist.Pie(value.selector, value.data, value.options.options, value.options.responsiveOptions);
        }
      });
      Chartist.on('created', function(e) {
        console.log(e);
        document.dispatchEvent(chartsDone);
      });
    },

    updateCharts: function(filter) {
      this.buildCharts(chartsData[filter]);
    },

    // updateFirstChart: function() {
    //   var newData = {
    //       labels: ['Evil', 'Good', 'Non-Conforming'],
    //       series: [555, 20, 30]
    //   };
    //   this.updateChart(chartsData.techPos, newData);
    // }
  };

  // module pattern
  // https://toddmotto.com/mastering-the-module-pattern/
  return {
    build: build,
    chartsData: chartsData
  };
})();

