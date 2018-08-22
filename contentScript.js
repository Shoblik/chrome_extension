document.querySelector('body').addEventListener('click', handleElementClicked, true);

function handleElementClicked() {
  console.log('click from the content script event listener');
  document.querySelector('body').removeEventListener('click', handleElementClicked, true);

  chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
    console.log(response);
  });
}
function handleResponse(message) {

}
function handleError(error) {

}
document.addEventListener("hello", function(data) {
    chrome.runtime.sendMessage("test");
});
