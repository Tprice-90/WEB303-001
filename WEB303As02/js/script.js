// WEB303 Assignment 2
// Terry Price #0622422

$(function (){
	$('div#solution').css({'height' : '400px' , 'display' : 'none'});

	$('a#vprospect').on('click', function(){

		$('div#solution').hide().slideDown(3000).load('prospect.html');
	});

	$('a#vconvert').on('click', function(){
		
		$('div#solution').hide().slideDown(3000).load('convert.html');
	});

	$('a#vretain').on('click', function(){

		$('div#solution').hide().slideDown(3000).load('retain.html');
	});
});