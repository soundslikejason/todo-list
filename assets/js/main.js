// check off specific todos by clicking
$("li").click(function() {
	$(this).toggleClass("completed");

	// //if li is gray
	// if ($(this).css("color") === "rgb(128, 128, 128)") {
	// 	// turn it black
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// } else {
	// 	$(this).css({
	// 		color: "gray",
	// 		textDecoration: "line-through"
	// 	});
	// } 
});