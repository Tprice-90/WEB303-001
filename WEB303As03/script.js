// WEB303 Assignment 3
//Terry Price #0622422

$(function () {
	$.getJSON("team.json").done(function (data) {
		$.each(data.teammembers, function(index, value) {
			$(`#team${index}`).html(`
			<h3>${value.name}</h3>
			<h4>${value.title}</h4>
			<p>${value.bio}</p>
			`);
		});
});