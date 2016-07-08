$(function() {
	var data = {
	  labels: ['Bananas', 'Apples', 'Grapes'],
	  series: [20, 15, 40]
	};

	var options = {
	  labelInterpolationFnc: function(value) {
	    return value[0]
	  }
	};

	var responsiveOptions = [
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
	];

	new Chartist.Pie('.ct-chart', data, options, responsiveOptions);
	new Chartist.Pie('.ct-chart1', data, options, responsiveOptions);
	new Chartist.Pie('.ct-chart2', data, options, responsiveOptions);
	new Chartist.Pie('.ct-chart3', data, options, responsiveOptions);

	$('.filter-list li').on('click', function() {
		$('.filter-list li a').removeClass('active');
		$(this).find('a').addClass('active');
	});
});
