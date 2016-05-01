(function ( $ ) {
	
	$.fn.extend({
		animatedCss: function ( animationName ) {
			var _animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

			return this.each(function(){
				$(this).removeClass().addClass('animated ' + animationName).one( _animationEnd, function() {
					$( this ).removeClass('animated ' + animationName);
				});
			});
		}
	});

}( jQuery ));


$(document).ready(function() {
	for (var i = 0;i < 10; ++i) {
		$('.helloworld').animatedCss('bounce');
	}
});
