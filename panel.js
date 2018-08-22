    $(document).ready(function() {
      $('.selectorBtn').on('click', makeSelection);

    });
    function makeSelection() {
      let destination = $(this).attr('destination');
      chrome.tabs.executeScript({
        file: "contentScript.js",
        runAt: "document_end"
      });
    }
    function handleMessage(request, sender, sendResponse) {
      console.log('message from the content script');
      console.log(request);

      sendResponse("Response from panel.js - received the payload");
    }

    chrome.runtime.onMessage.addListener(handleMessage);
