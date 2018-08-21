$(document).ready(function() {
  $('.selectorBtn').on('click', makeSelection);

});
function makeSelection() {
  let destination = $(this).attr('destination');
  console.log(chrome);
  chrome.tabs.executeScript(null, {
      file: "contentScript.js",
      runAt: "document_end"
  });
}
