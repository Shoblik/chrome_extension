    $(document).ready(function() {
      $('.selectorBtn').on('click', makeSelection);

    });
    function makeSelection() {
      let destination = $(this).attr('destination');
      console.log(chrome);
      chrome.tabs.executeScript({
        file: "contentScript.js",
        runAt: "document_end"
      });
    }
    function handleMessage(request, sender, sendResponse) {
      console.log("Message from the content script: " +
        request.greeting);
      sendResponse({response: "Response from background script from panel.jssss"});
    }

    chrome.runtime.onMessage.addListener(handleMessage);
