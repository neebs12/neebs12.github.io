console.log('Hello World');

let firstExample;
let secondExample; 
let thirdExample;
let img;

function firstExampleHandler(event) {
  // not yet created
  if (firstExample.lastElementChild.tagName !== "IMG") {
    img = document.createElement('img');  
    firstExample.insertAdjacentElement("beforeend", img);  
    img.style.width = 'auto';
    img.classList.add("daniel");
  } 
  // should update *all* daniel imgs as this part is toggled
  // -- applicable to any examples
  [].forEach.call(document.getElementsByClassName('daniel'), 
    img => img.setAttribute('src', event.target.value)
  );
}

// work on second example
function secondExampleHandler(event) {
  if (!img) return alert("Please select a Daniel first!")

  // first, remove all children of secondExample except for the fieldset
  let tmp = secondExample.lastElementChild;
  while (tmp.tagName !== 'FIELDSET') {
    tmp.remove();
    tmp = secondExample.lastElementChild;
  }

  let val = event.target.value;
  // img is the current element - is cloned
  for (let i = 0; i < val; i += 1) {
    let copyImg = img.cloneNode(false);
    secondExample.insertAdjacentElement("beforeend", copyImg);
  }
}

function thirdExampleHandler(event) {
  event.preventDefault();

  let val = event.target.querySelector('input').value.trim();

  let tmp = thirdExample.lastElementChild;
  if (tmp.tagName !== 'FIELDSET') tmp.remove();
  
  let h3 = document.createElement('h3');
  thirdExample.insertAdjacentElement("beforeend", h3);

  // creating text node for sanitation
  const applyText = txt => h3.appendChild(document.createTextNode(txt));

  try {
    let elms = document.querySelectorAll(val);
    if (!elms.length) {
      applyText(`This page has no elements matching your "${val}" selector.`)
    } else if (elms.length === 1) {
      applyText(`This page has 1 element matching your "${val}" selector`)
    } else {
      // plural
      applyText(`This page has ${elms.length} elements matching your "${val}" selector`)
    }
  } catch {
    // handling of invalid selector
    applyText(`The "${val}" selector is invalid!`)
  }
}

function registerHandlers() {
  firstExample.addEventListener('change', firstExampleHandler);
  secondExample.addEventListener('change', secondExampleHandler);
  thirdExample.addEventListener('submit', thirdExampleHandler)
}

document.addEventListener('DOMContentLoaded', event => {
  firstExample = document.getElementById('first-example');
  secondExample = document.getElementById('second-example');
  thirdExample = document.getElementById('third-example');
  registerHandlers();
});