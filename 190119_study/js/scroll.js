$('#basePage-Up').on('click', function() {
	$(window).scrollTop(0);
})

$(window).on('scroll', function() {
	var location = $(window).scrollTop();
	console.log(location);
	if (location > 0) {
		$('#kakaoPlusBtn').addClass('high');
		$('#basePage-Up').removeClass('hide')
	} else {
		$('#kakaoPlusBtn').removeClass('high');
		$('#basePage-Up').addClass('hide')
	}
})