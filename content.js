//upon load
chrome.storage.local.get('checked', (response) => {
 	if(!response.checked){
 		chrome.tabs.executeScript({file: "./theme-switch-dark.js"});
 	}
 	else chrome.tabs.executeScript({file: "./theme-switch-light.js"});
 });

//when switch changes
chrome.runtime.onMessage.addListener((message, callback) => {
	if(message.checked){
		chrome.tabs.executeScript({file: "./theme-switch-dark.js"});
	}
 	else chrome.tabs.executeScript({file: "./theme-switch-light.js"});
});