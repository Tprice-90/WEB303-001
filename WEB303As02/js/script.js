// WEB303 Assignment 2
// Terry Price #0622422

$(function (){
	$('div#solution').css('height', '40px').hide();

	$('a#vprospect').on('click', function(){

		$('div#solution').slideDown(4000, function(){
			$(this).load('prospect.html');
		});
	});

	$('a#vconvert').on('click', function(){
		
		$('div#solution').slideDown(4000, function(){
			$(this).load('convert.html');
		});
	});

	$('a#vretain').on('click', function(){

		$('div#solution').slideDown(4000, function(){
			$(this).load('retain.html');
		});
	});
});