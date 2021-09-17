/*
	WEB 303
	Starting file for Assignment 1 
	Terry Price #0622422
*/

"use strict";

$(document).ready(function(){
	var $salary = $('#salary');
	let $percent = $('#percent');
	let $spend = $('#spend').text();
	
	$(salary).on('change', function(event) {
		$(spend).text('$' + $(salary).val());
	});
	
	$(percent).on('change', function(event) {
		$(spend).text('$' + $(salary).val() * $(percent).val() /100);
		// $(spend).text(parseInt($(salary).val()) * parseInt($(percent).val()) / 100);
	});
});