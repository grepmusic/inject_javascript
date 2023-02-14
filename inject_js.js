
(function () {
    var saved = false
    if(localStorage.inject_js) {
        saved = true
        inject_js.value = localStorage.inject_js;
    } else {
        localStorage.inject_js = inject_js.value;
    }

    var show_status = function () { save_status.style.display = ''; }
    var hide_status = function () { save_status.style.display = 'none'; }
    var timer = null;

    save.onclick = function () {
        var inject_js_code = inject_js.value
        localStorage.inject_js = inject_js_code;
        (async () => {
            const response = await chrome.runtime.sendMessage({ inject_js: inject_js_code });
            console.log('sendMessage inject_js_code', inject_js_code, 'response', response);
        })();
        show_status();
        if(timer)
            clearTimeout(timer);
        timer = setTimeout(hide_status, 2000);
    }

    saved || save.onclick()
})()
