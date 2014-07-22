(function () {
    window.append_javascript = function (src, onload) {
        var js = document.createElement('script');
        js.setAttribute("type", "text/javascript");
        js.type = "text/javascript";
        js.setAttribute("src", src);
        js.src = src;
        js.onload = function (evt) {
            console.log('extension::append_javascript: loaded js file: ' + src);
            if(onload) onload(evt);
        }
        var body = document.getElementsByTagName('body')[0];
        if(body) {
            body.appendChild(js);
        } else { // should never happen
            console.log("extension::append_javascript: body element does not exist");
        }
    }

    chrome.extension.sendMessage({ connected: true }, function(response) {
        console.log('responded from background javascript');
        if(response.inject_js) {
            try {
                //console.log('js: ' + response.inject_js);
                eval(response.inject_js);
            } catch (e) {
                console.log(e);
            }
        }
    });
})();