//upon load
chrome.storage.local.get('checked', (response) => {
 	if(response.checked){
 		alert("she be dark now");
 	}
 });

//when switch changes