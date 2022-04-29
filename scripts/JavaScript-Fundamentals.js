console.log('Hello World');

let firstExample;
let secondExample; 
let thirdExample;
let img;

function firstExampleHandler(event) {
  // not yet created
  if (img !== firstExample.lastElementChild) {
    img = document.createElement('img');  
    firstExample.insertAdjacentElement("beforeend", img);  
    img.style.width = 'auto';
  } 
  img.setAttribute('src', event.target.value);
}

// work on second example
function secondExampleHandler() {}

function registerHandlers() {
  firstExample.addEventListener('change', firstExampleHandler)
}

document.addEventListener('DOMContentLoaded', event => {
  firstExample = document.getElementById('first-example');
  secondExample = document.getElementById('second-example');
  thirdExample = document.getElementById('third-example');
  registerHandlers();
});