const mode = document.getElementById("color-box");
const title = document.getElementById("color-title");

chrome.storage.local.get(['checked'], (response) => {
	mode.checked = response.checked;
	changeStylesheet(response.checked);
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
	chrome.tabs.query({
		url: 'https://*.linkedin.com/*'
	}, 
	(tabs) => {
		tabs.forEach(tab =>
			helper(tab, chk)
		);
	});
}

function helper(tab, chk){
	if(chk){
		chrome.tabs.insertCSS({file: "./content.css"});
	}
}