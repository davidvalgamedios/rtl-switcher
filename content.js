chrome.runtime.onMessage.addListener(function (msg) {
    if (msg.rtlSwitcherMsg === 'switch') {
        document.body.setAttribute('dir', document.body.getAttribute('dir') === 'rtl'?'ltr':'rtl');
    }
});