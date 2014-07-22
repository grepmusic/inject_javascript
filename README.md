inject_javascript
=================

A simple chrome extension for injecting javascript code on every page, it is very easy to use if you know javascript.

You can paste any javascript code in the textarea or you can use function append_javascript to add remote javascript files. Note there is limitation for content scripts of chrome extension: content scripts are executed in a separated environment(sandbox), which is different from the one of the actual page, they only share dom.

code below is the default injecting javascrit:
<pre>
(function () {

  if(top != window) // skip all iframe/frameset
    return;

//  if(location.host.match(/grepmusic\.com/i)) { // for a certain host
//    alert(location.href);
//    // append javascript file: function append_javascript (src, onload) { /* code implemented by the extension */ }
//    append_javascript('http://code.jquery.com/jquery-1.11.1.min.js', function () { alert('jquery has been downloaded'); });
//  }

// force user to go to ONE page every time
// if(location.href != 'http://www.grepmusic.com/') location.href = 'http://www.grepmusic.com/';

// the following javascript will make chrome scroll to the best answer of stackoverflow.com automatically
  if(location.href.match(/^http:\/\/stackoverflow.com\/questions\/\d/i)) {
    var span = document.getElementsByClassName('load-accepted-answer-date')[0];
    span && span.parentNode.scrollIntoView();
    console.log('ok');
  }

// you can do anything you want here using javascript

})();
</pre>
