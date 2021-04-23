// init map 
var buttons = document.querySelectorAll("#button");
const overlay = document.querySelectorAll("#map");
const maps = new Map();

// function for each button
var reply = function()
{
	var button = this.textContent;
	var value = maps.get(this.textContent);
	if (value) {		
		maps.set(button, --value);
	}
	else {
		maps.set(button, ++value);
	}

	for (var i = 0; i < overlay.length; i++) {
		if (!i) {continue;}
	    var map_name = overlay[i].attributes.src.value;
	    if (map_name == button  + ".png") {
	    	overlay[i].style.opacity = value * 100;
	    }
	}
}

// clear all
var clear = function()
{
	for (var i = 0; i < overlay.length; i++) {
		if (!i) {continue;}
	    overlay[i].style.opacity = 0;
	}
	refresh();
}

// assign each button a function
var refresh = function()
{
	for (var i = 0; i < buttons.length; i++) {
	    maps.set(buttons[i].textContent, 0);
	    buttons[i].onclick = reply;
	}
	console.log("Ready!");
}

refresh()
document.querySelector("#clear").onclick = clear;