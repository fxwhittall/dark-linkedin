//upon load
chrome.storage.local.get('checked', (response) => {
 	if(!response.checked){
 		chrome.activeTab.executeScript({file: "./theme-switch.js"});
 	}
 });

//when switch changes
chrome.runtime.onMessage.addListener((message, callback) => {
	if(message.checked){
		alert("switch flipped dark");
	}
	else alert("switch flipped light");
});