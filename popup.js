var mode = document.getElementById("color-box");
mode.addEventListener('click', () => {
	if(mode.checked === true){
		document.getElementById("color-title").innerHTML = "Toggle normal mode";
	}
	else{
		document.getElementById("color-title").innerHTML = "Toggle dark mode";
	}
});