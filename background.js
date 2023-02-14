chrome.action.onClicked.addListener(function(tab) {
    chrome.tabs.create({
        'url': chrome.runtime.getURL('inject_js.html')
    }, function(tab) {
    });
});

var inject_js = ''
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        console.log('request', request)
        request = request || {};
        if(request.inject_js) {
            inject_js = request.inject_js
            return
        }
        if(request.connected === true) { // from content script
            sendResponse({ inject_js });
            // return true
        }
    }
);

// chrome.extension.onMessage.addListener(
//     function(request, sender, sendResponse) {
//         console.log(sender.tab ?
//             "from a content script:" + sender.tab.url :
//             "from the extension");
//         request = request || {};
//         if(request.connected === true) { // from content script
//             sendResponse({ inject_js: localStorage.inject_js });
//         }
//     });