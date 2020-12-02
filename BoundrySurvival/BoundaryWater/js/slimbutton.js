// Wrote by Dylan Espie
// Initialize myLink with id nextmove and when 
// clicked runs the function below
var myLink = document.getElementById('nextmove');
myLink.onclick = function(){
	// Gets the move and day count from cookies
	var moveInput = localStorage.getItem("storeMove");
	moveInput = Number(moveInput);
	var daysInput = localStorage.getItem("storeDays");
	daysInput = Number(daysInput);
	// If moves are at 1 or lower change moves to 3 and minus 1 day
	if (moveInput <= 1) {
		moveInput = 3;
		daysInput -= 1;
		localStorage.setItem("storeDays", daysInput);
	} 
	// Minus 1 to moveInput and store moveInput to 
	// storeMove	
	moveInput -= 1;
	localStorage.setItem("storeMove", moveInput);
	// Initializes move to true to run while loop
	var move = true;
	// while move is true run loop
	while(move) {
		// Asks user for input, moves to lower case
		var input = "";
		input = prompt("Slim Lake is very long!\nExplore North Slim Lake?\nExplore South Slim Lake?\nThis will not count as a move.\n\nEnter: North or South");
		input = input.toLowerCase();
		// Prompt if user types north
		if (input === "north") {
			input = prompt("Both trails seem long...\nHike the trail North?\nHike the trail East?\n\nEnter North or East");
			input = input.toLowerCase();
			// Opens Big Lake East html
			if (input === "north"){
				move = false;
				window.open("BigLakeEast.html", "_self");
			}
			// Opens Exit77 html
			if (input === "east") {
				move = false;
				window.open("Exit77.html", "_self");
			}
		}
		// Prompt if user types north
		if (input === "south") {
			input = prompt("You feel sick, and weak...\nYou see a trail West.\nYou see a trail East\n\nEnter: West or East");
			input = input.toLowerCase();
			// Opens Slim Lake Perish html
			if (input === "west"){
				move = false;
				window.open("SlimLakePerish.html", "_self");
			}
			// Opens Slim Lake Perish html
			if (input === "east"){
				move = false;
				window.open("SlimLakePerish.html", "_self");
			}
		}
	}
	// return false so does not run again
	return false;
}