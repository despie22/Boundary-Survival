// Wrote by Dylan Espies
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
		input = prompt("You should find camp soon...\nHike the trail East and find camp?\nStay and try to find camp on Rice Lake.\n\nEnter: East or Stay");
		input = input.toLowerCase();
		//Opens Slim Lake html
		if (input === "east") {
			move = false;
			window.open("SlimLake.html", "_self");
		}
		//Opens Rice Lake html
		if (input === "stay") {
			move = false;
			window.open("RiceLake.html", "_self");
		}
	}
	// return false so does not run again
	return false;
}