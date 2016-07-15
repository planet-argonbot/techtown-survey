$(function() {
	// Called the survey to build here
	Survey.build.init();

	$('.filter-list li').on('click', function() {
		$('.filter-list li a').removeClass('active');
		$(this).find('a').addClass('active');
	});
});
