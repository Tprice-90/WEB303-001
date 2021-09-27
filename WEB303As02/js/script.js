// WEB303 Assignment 2
// Terry Price #0622422

$(function (){
	$('div#solution').css('height', '100px');

	$('#a#vprospect').on('click', function(){

		$('div#solution').load('prospect.html').slideDown(3000);
	});

	$('a#vconvert').on('click', function(){
		
		$('div#solution').load('convert.html').slideDown(3000);
	});

	$('a#vretain').on('click', function(){

		$('div#solution').load('retain.html').slideDown(3000);
	});
});