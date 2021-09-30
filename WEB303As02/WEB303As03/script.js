// WEB303 Assignment 3
//Terry Price #0622422

$(function () {
	var teammemberReturnValue = $.getJSON("team.json").done(function (data) {
		$.each(data.teammembers, function(index, value) {
			$(`div#team`).html(`
			<h3>${value.name}</h3>
			<h4>${value.title}</h4>
			<p>${value.bio}</p>
			`);
		});
		console.log("Teammember return value: ", teammemberReturnValue);
	});
});