document.addEventListener('click', handleElementClicked, true);

if (typeof activeSelect !== 'undefined') {
  activeSelect = true;
} else {
  var activeSelect = true;
}


$('body').children().mouseover(function(e){
    if (activeSelect) {
      $(".hova").removeClass("hova");
      $(e.target).addClass("hova");
      return false;
    }
}).mouseout(function(e) {
    $(this).removeClass("hova");
});

function handleElementClicked(e) {
  e.stopPropagation();
  e.preventDefault();
  activeSelect = false;
  // prevent subsequent clicks by the user
  document.removeEventListener('click', handleElementClicked, true);

  // get the target elements three parents along with 2 class names
  let targetEle = event.target;

  let selector = null;

  let eleTag = targetEle.localName;
  if (targetEle.classList) {
    eleTagClass = createClassArray(targetEle.classList);
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

  //Combine selectors and tags
  selector = eleParentTag3 + eleParentClass3 + ' ' + eleParentTag2 + eleParentClass2 + ' ' + eleParentTag1 + eleParentClass1 + ' ' + eleTag + eleTagClass;
  console.dir(selector);

  chrome.runtime.sendMessage({'selector': selector, 'destination': destination}, function(response) {
    console.log(response + 'from contentScript.js');
  });
}
function createClassArray(obj) {
  let tmp = '';
  for (let i = 0; i < obj.length; i++) {
    if (obj[i] !== 'hova' && obj[i] !== 'active' && obj[i] !== 'select' && obj[i] !== 'selected') {
      tmp += '.' + obj[i];
    }
  }
  return tmp;
}
