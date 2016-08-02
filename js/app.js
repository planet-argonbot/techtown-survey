$(function() {
	// Called the survey to build here
	Survey.build.init();


	$('.filter-list a').on('click', function(e) {
		$(this).closest('.filter-list').find('a').removeClass('active');
		$(this).addClass('active');
		Survey.build.updateCharts($(this).data('filter'), $(this).data('section'));
    if ($(this).data('section') === 'workforce') {
      alterChartLabels(e);
    }
 		e.preventDefault();
	});

  var alterChartLabels = function(target) {
    var labels;
    switch ($(target.currentTarget).data('filter')) {
      case 'race':
        labels = ['White', 'Person of Color'];
        break;
      case 'gender':
        labels = ['Male', 'Female'];
        break;
    }
    var current = $('.chart-key').find('li');
    for (var i =0; i < current.length; i++) {
      // replace html of li with labels array
      $(current[i]).html(labels[i]);
    }
  };

  // when charts-done event is fired, set height of chart wrapper
  // this prevents weird visual hopping when changing between chart filters
  document.addEventListener('charts-done', function(e) {
    $('.chart-wrapper').each(function() {
      $(this).height($(this).height());
    });
  });

  $(window).on('resize', function() {
    $('.chart-wrapper').css('height', 'auto');
  });
});
