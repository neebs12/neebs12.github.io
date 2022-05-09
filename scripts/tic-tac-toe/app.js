import View from './javascripts/view.js'
import Model from './javascripts/model.js'
import Controller from './javascripts/controller.js'


console.log("Welcome to Tic-Tac-Toe! Enjoy!")
document.addEventListener('DOMContentLoaded', () => {
  new Controller(new View(), new Model());
})

