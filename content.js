chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if(message.input){
 		document.body.style.backgroundColor = black;
	}
	else document.body.style.backgroundColor = white;
});