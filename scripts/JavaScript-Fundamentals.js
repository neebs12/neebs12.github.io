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
  if (!img) {
    alert("Please select a Daniel before toggling for this example!")
    return;
  }

  // first, remove all children of secondExample except for the fieldset
  let tmp = secondExample.lastElementChild;
  while (tmp.tagName !== 'FIELDSET') {
    tmp.remove();
    tmp = secondExample.lastElementChild;
  }

  let val = event.target.value;
  // img is the current element
  // we clone it, 
  // at this part of the code, img is a valid HTMLIMGElement object
  for (let i = 0; i < val; i += 1) {
    let copyImg = img.cloneNode(false);
    secondExample.insertAdjacentElement("beforeend", copyImg);
  }
}

function registerHandlers() {
  firstExample.addEventListener('change', firstExampleHandler);
  secondExample.addEventListener('change', secondExampleHandler);
}

document.addEventListener('DOMContentLoaded', event => {
  firstExample = document.getElementById('first-example');
  secondExample = document.getElementById('second-example');
  thirdExample = document.getElementById('third-example');
  registerHandlers();
});