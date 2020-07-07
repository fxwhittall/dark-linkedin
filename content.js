chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	if(message.input){
		alert('Dark mode on');
	}
	else alert('Dark mode off');
});

// function changeColor(dark){
// 	if(dark){
// 		//add stylesheet	
// 	}
// 	else{
// 		//remove stylesheet
// 	}
// }