
// on click change background color property

$(".changeColor").on("click", function() {

	var colors = ["#0692CD" "#3b609b", "#9b3b3b", "#3b9b81", "#7da5a4"];

	var rand = Math.floor(Math.random() * colors.length);
	//$("body").css("background-color", colors[rand]);
	$(this).css("background-color", colors[rand]);

});

/*
function myFunction () {

	var colors = ["#0692CD" "#3b609b", "#9b3b3b", "#3b9b81", "#7da5a4"];

	var rand = Math.floor(Math.random() * colors.length);
	//$("body").css("background-color", colors[rand]);
	$(this).css("background-color", colors[rand]);

}
*/