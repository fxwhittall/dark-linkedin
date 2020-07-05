var mode = document.getElementById("#color-switch");
mode.addEventListener('click', () => {
	if(mode.checked === true){
		document.getElementById("#color-label").innerHTML("Toggle normal mode");
	}
});