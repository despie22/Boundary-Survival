// Wrote by Dylan Espie
// Initialize myLink with id nextmove and when 
// clicked runs the function below
var myLink = document.getElementById('nextmove');
myLink.onclick = function() {
	// daysInput and moveInput stores value in cookies
	// so we can carry it to multiple html
	var moveInput = 1;
	localStorage.setItem("storeMove", moveInput);
	var daysInput = 2;
	localStorage.setItem("storeDays", daysInput);
	// move to true for whileloop
	var move = true;
	// Run loop if move is true
	while(move) {
		// Asks user for input 
		// moves to lower case
		var input = "";
		input = prompt("You are getting weak and only have a couple days left...\nTake the trail West?\nTake the trail East?\n\nEnter: West or East");
		input = input.toLowerCase(); 
		//Opens Big Rice Lake html
		if (input === "west") {
			move = false;
			window.open("BigRiceLake.html", "_self");
		}
		//Opens Rice Lake html
		if (input === "east") {
			move = false;
			window.open("RiceLake.html", "_self");
		}
	}
	// return false so it does not run again
	return false;
}