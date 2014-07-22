
if(localStorage.inject_js)
    inject_js.value = localStorage.inject_js;
else
    localStorage.inject_js = inject_js.value;

var show_status = function () { save_status.style.display = ''; }
var hide_status = function () { save_status.style.display = 'none'; }
var timer = null;

save.onclick = function () {
    localStorage.inject_js = inject_js.value;
    show_status();
    if(timer)
        clearTimeout(timer);
    timer = setTimeout(hide_status, 2000);
}