function clkFirstBtn() {
	let elem = document.getElementById("demo"); // get first button
	elem.style.backgroundColor = "red"; // change background of first button
	elem.style.color = "white"; // change background of content/heart in first button
	document.body.style.backgroundColor = "black"; // change background of body
	document.getElementById("instructn").style.color = "white"; // change font color
}

function clkFirstBtn2() {
	let elem = document.getElementById("demo2"); // get second button
	elem.style.backgroundColor = "black"; // change background of second button
	elem.style.color = "gold"; // change background of content/heart in second button
	document.body.style.backgroundColor = "green"; // change background of body
	document.getElementById("instructn").style.color = "gold"; // change font color
}
