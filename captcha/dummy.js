var boolTiles = new Array(16);
for (var i = 0; i < 17; ++i) { 
	boolTiles[i] = true; 
}

var idPrefix = "a";

var idArray = new Array(16);
for (var i = 1; i < 17; i++) {
	idArray[i] = idPrefix.concat(i.toString());
}

function tileUpdate(tileIndex){
	index = idArray.indexOf(tileIndex);
	var element = document.getElementById(tileIndex);

	if (boolTiles[index]) {
		element.style.opacity = 1;
		element.style.borderColor = "black";
		boolTiles[index] = false;
	} else {
		element.style.opacity = 0.75;
		element.style.borderColor = "white";
		boolTiles[index] = true;
	}
}
var correctAnswers = new Array(16) 

function reset(element){
	element.style.opacity = 0.75;
	element.style.borderColor = "white";
}

function updateAnswers(){
	for (var i = 0; i < 17; i++) {
		correctAnswers[i] = boolTiles[i];
	}

	document.getElementById("submit").style.display = "block";
	document.getElementById("chose").style.display = "none";

	for (var i = 0; i < 17; ++i) { 
		boolTiles[i] = true; 
	}

	var buttons = document.getElementsByClassName("tile");
	for (var i = 0; i < buttons.length; i++) {
		reset(buttons[i]);
	}
}

function verify(){
	console.log(correctAnswers);
	console.log(boolTiles);

	var verified = true;
	for (var i = 0; i < 17; ++i) { 
		if (correctAnswers[i] != boolTiles[i]) {
			verified = false;
			break;
		}
	}
	if (verified) {
		document.getElementById("submit").innerText="Correct";
	} else {
		document.getElementById("submit").innerText="Incorrect";
	}
}

