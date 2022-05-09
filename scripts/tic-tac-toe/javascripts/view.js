class View {
  constructor () {
    console.log('View Constructed');
    this.FIRST_PLAYER_MARKER = 'X';
    this.SECOND_PLAYER_MARKER = 'O';
    // this.viewState = 'free'; // 'ongoing', 'done'
    this.isBoardFrozen = false;
    this.defaultFlashMessage = '';
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
  }

  /*initializer method*/
  initializeBoard() {
    this.deleteAllMarkers();
    this.renderPlayerScores();
    this.flashMessage('Click on a tile to start the game!');
  }

  /*marker methods*/
  #addMarker(id, marker) {
    // at `id`, we add the marker `marker`
    // debugger;
    let cell = document.getElementById(String(id))
    cell.textContent = marker;
  } 

  /*marker additions - higher abstractions*/
  addFirstPlayerMarker(id) {
    this.#addMarker(id, this.FIRST_PLAYER_MARKER)
  }

  addSecondPlayerMarker(id) {
    this.#addMarker(id, this.SECOND_PLAYER_MARKER)
  }

  deleteAllMarkers() {
    let tds = document.querySelectorAll('td');
    [].forEach.call(tds, td => td.textContent = '');
  }

  /*player view change*/
  renderPlayerScores() {
    document.getElementById('player-one-score')
      .textContent = this.playerOneScore;
    document.getElementById('player-two-score')
      .textContent = this.playerTwoScore;
  }

  incrementPlayerOneScore() {
    let p1 = document.getElementById('player-one-score');
    p1.textContent = Number(p1.textContent) + 1; 
  }

  incrementPlayerTwoScore() {
    let p2 = document.getElementById('player-two-score');
    p2.textContent = Number(p2.textContent) + 1; 
  }

  /*freeze board state togglers*/
  freezeBoard() {
    this.isBoardFrozen = true;
  }

  unfreezeBoard() {
    this.isBoardFrozen = false;
  }

  /*binders*/
  bindCellClick(handler) {
    let table = document.querySelector('table');
    table.addEventListener('click', event => {
      if (this.isBoardFrozen) {
        return this.flashMessage('Click the reset button to play again!', false)
      }

      let id = event.target.id;
      if (!event.target.textContent.length) {
        this.flashMessage('You got this!');
        handler(id, this.FIRST_PLAYER_MARKER); 
      } else {
        this.flashMessage('Cannot click on a populated cell!', false)
      }
    });
  }

  bindResetGameButtonClick(handler) {
    let resetButton = document.getElementById('reset-game-button');
    resetButton.addEventListener('click', event => {
      let confirmation = window.confirm(
        'This clears the board. Are you sure?'
      )
      if (confirmation) {
        this.flashMessage('Game Reset! You got this') 
        this.unfreezeBoard();    
        handler();
      }
    })
  }

  /*view*/
  flashMessage(msg, isPermanent = true) {
    let subtitle = document.getElementById('subtitle');
    subtitle.textContent = msg;
    if (isPermanent) {
      this.defaultFlashMessage = msg;
    } else {
      setTimeout(() => {
        subtitle.textContent = this.defaultFlashMessage
      }, 2500);
    }
  }

  messageTiedRound() {
    this.flashMessage('The round is Tied!', true);
  }

  messagePlayerOneWinsRound() {
    this.flashMessage('The round is won by player one!', true)
  }

  messagePlayerTwoWinsRound() {
    this.flashMessage('The round is won by player two!', true)
  }

  displayAlertMessage(msg) {
    // add to message queue to not interrupt rendering
    setTimeout(() => alert(msg))
  }
}

export default View;