chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({
        'url': chrome.extension.getURL('inject_js.html')
    }, function(tab) {
    });
});

chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        request = request || {};
        if(request.connected === true) { // from content script
            sendResponse({ inject_js: localStorage.inject_js });
        }
    });