(function () {
    (async () => {
        const response = await chrome.runtime.sendMessage({ connected: true });
        // do something with response here, not outside the function
        console.log('response', response);
        console.log('responded from background javascript');
        if(response && response.inject_js) {
            try {
                //console.log('js: ' + response.inject_js);
                var iframe = document.createElement('iframe');
                iframe.setAttribute("onload", response.inject_js) // currently the only way(I have found) to bypass `unsafe-inline` error
                iframe.src = 'about:blank'
                document.body.appendChild(iframe)
                // eval(response.inject_js); // not work any more for manifest v3
            } catch (e) {
                console.log('eval error', e);
            }
        }
    })();
})();