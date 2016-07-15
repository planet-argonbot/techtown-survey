$(function() {
	// Called the survey to build here
	Survey.build.init();

	$('.filter-list a').on('click', function() {
		$('.filter-list a').removeClass('active');
		$(this).addClass('active');
		Survey.build.updateCharts($(this).data('filter'));
	});
});
