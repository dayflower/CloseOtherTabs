function iconClick(tab) {
	chrome.tabs.query({"currentWindow": true, "active": false, "pinned": false}, function(listOfTabs) {
		for (var i=0; i<listOfTabs.length; i++) {
			chrome.tabs.remove(listOfTabs[i].id);	
		}
	});
}

// MAIN
chrome.browserAction.onClicked.addListener(iconClick);
