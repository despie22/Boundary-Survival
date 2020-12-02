// Wrote by Dylan Espie
// Writes storeDays
document.write(localStorage.getItem("storeDays"));
// checks if storeDays is less than or equal to 0
// if true then opens Days Perish html
if (localStorage.getItem("storeDays") <=0){
	window.open("DaysPerish.html", "_self");
}


