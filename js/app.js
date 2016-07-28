$(function() {
	// Called the survey to build here
	Survey.build.init();


	$('.filter-list a').on('click', function(e) {
		$(this).closest('.filter-list').find('a').removeClass('active');
		$(this).addClass('active');
		Survey.build.updateCharts($(this).data('filter'), $(this).data('section'));
		e.preventDefault();
	});

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
