    $(document).ready(function() {
      $('.selectorBtn').on('click', makeSelection);

    });
    function makeSelection() {
      let destination = $(this).attr('destination');
      let scriptVar = `var destination = '${destination}';`
      chrome.tabs.insertCSS({
        file: 'css/content.css'
      })
      chrome.tabs.executeScript({
         file: 'jquery/jquery_min.js'
      });
      chrome.tabs.executeScript({
          code: scriptVar,
      }, function() {
          chrome.tabs.executeScript({file: 'contentScript.js'})
      });
    }
    function storeSelection(request) {
      console.log(request);
      $('#' + request.destination).text(request.selector);
    }

    // listening for messages from the DOM
    function handleMessage(request, sender, sendResponse) {
      storeSelection(request)
      // sendResponse("Response from panel.js - received the payload");
    }

    chrome.runtime.onMessage.addListener(handleMessage);
