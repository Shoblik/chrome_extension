document.addEventListener('click', handleElementClicked, true);

function handleElementClicked() {
  // prevent subsequent clicks by the user
  document.removeEventListener('click', handleElementClicked, true);

  // get the target elements three parents along with 2 class names
  let targetEle = event.target;
  let selector = null;

  let eleTag = targetEle.localName;
  if (targetEle.classList) {
    eleTagClass = '.' + targetEle.classList[0];
  } else {
    eleTagClass = '';
  }

  let eleParent1 = targetEle.parentElement;
  let eleParentTag1 = eleParent1.localName;
  if (eleParent1.classList) {
    eleParentClass1 = createClassArray(eleParent1.classList);
  } else {
    eleParentClass1 = '';
  }

  let eleParent2 = eleParent1.parentElement;
  let eleParentTag2 = eleParent2.localName;
  if (eleParent2.classList) {
    eleParentClass2 = createClassArray(eleParent2.classList);
  } else {
    eleParentClass2 = '';
  }

  let eleParent3 = eleParent2.parentElement;
  let eleParentTag3 = eleParent3.localName;
  if (eleParent3.classList) {
    eleParentClass3 = createClassArray(eleParent3.classList);
  } else {
    eleParentClass3 = '';
  }
  debugger;

  chrome.runtime.sendMessage({data: "eleThatWasClicked"}, function(response) {
    console.log(response + 'from contentScript.js');
  });
}
function createClassArray(obj) {
  let tmp = '';
  for (let i = 0; i < obj.length; i++) {
    tmp += '.' + obj[i];
  }
  return tmp;
}
