chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.extensionId === 'rtl-switcher') {
        document.body.setAttribute('dir', document.body.getAttribute('dir') === 'rtl'?'ltr':'rtl')
    }
});