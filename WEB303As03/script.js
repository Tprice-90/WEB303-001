// WEB303 Assignment 3
//Terry Price #0622422

$(function () {
	var teammemberReturnValue = $.getJSON("team.json").done(function (data) {
		$.each(data.teammembers, function(index, value) {
			$(`div#team`).append(`
			<h3>${value.name}</h3>
			<h4>${value.title}</h4>
			<p>${value.bio}</p>
			`);
		});
		console.log("Teammember return value: ", teammemberReturnValue);
	});
	
	$.ajax({
		url:"team.json",
		beforeSend: function(){
			$("div#team").html(`
			<h3>Loading...</h3>
			`);
		},
		error: function(xhr, error) {
			alert(xhr, error.message);
		},
		timeout: 5000,
		success: function(data) {
			$.each(data.teammembers, function(index, value) {
				$(`div#team`).append(`
				<h3>${value.name}</h3>
				<h4>${value.team}</h4>
				<p>${value.bio}</p>
				`);
			});
			$(`div#team h3`).remove();
		},
	});
});