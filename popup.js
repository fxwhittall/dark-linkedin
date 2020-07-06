const mode = document.getElementById("color-box");
const title = document.getElementById("color-title");
let checked = chrome.storage.local.get(['checked'], () => {
	changeStylesheet(checked);
});

mode.addEventListener('click', () => {
	changeStylesheet(mode.checked);
});

function changeStylesheet(chk){
	if(chk){
		title.innerHTML = "Toggle Normal Mode";
	}
	else{
		title.innerHTML = "Toggle Dark Mode";
	}
	chrome.storage.local.set({checked: chk});
}