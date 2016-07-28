$(function() {
	// Called the survey to build here
	Survey.build.init();


	$('.filter-list a').on('click', function(e) {
		$('.filter-list a').removeClass('active');
		$(this).addClass('active');
		Survey.build.updateCharts($(this).data('filter'));
		e.preventDefault();
	});

  // when charts-done event is fired, set height of chart wrapper
  // this prevents weird visual hopping when changing between chart filters
  document.addEventListener('charts-done', function(e) {
    $('.chart-wrapper').height($('.chart-wrapper').height());
  });

  $(window).on('resize', function() {
    console.log('resized!');
    $('.chart-wrapper').css('height', 'auto');
  });
});
