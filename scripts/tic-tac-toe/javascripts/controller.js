class Controller {
  constructor (view, model) {
    console.log('Controller Constructed')
    this.view = view
    this.model = model

    this.view.initializeBoard();

    this.#registerHandlers()
  }

  #registerHandlers() {
    this.view.bindCellClick(this.handleCellClick)
    this.view.bindResetGameButtonClick(this.handleResetGameButtonClick)
  }

  handleCellClick = (playerMove, playerMarker) => {  
    // updates gamestate based on clicked cell
    // is NOT made compatible with second player
    this.model.updateGameState(playerMove, playerMarker)
    this.view.addFirstPlayerMarker(playerMove);

    // need to double check gamestate AFTER the computer makes a move
    let gameState = this.model.checkGameState(); 

    if (!gameState) {
      let computerMove = this.model.getComputerMove();
      this.model.updateGameState(computerMove, this.view.SECOND_PLAYER_MARKER);
      // game state needs to be re-checked after computer move
      gameState = this.model.checkGameState(); 

      this.view.addSecondPlayerMarker(computerMove);
    }    
    
    if(gameState === this.model.TIE_MARKER) {
      // good place to add a message
      this.view.messageTiedRound();

    } else if(gameState === this.model.FIRST_WINS_MARKER) {
      // first player wins
      this.view.incrementPlayerOneScore()
      this.view.messagePlayerOneWinsRound();
      this.view.freezeBoard();

    } else if (gameState === this.model.SECOND_WINS_MARKER) {
      // second player wins
      this.view.incrementPlayerTwoScore()
      this.view.messagePlayerTwoWinsRound();
      this.view.freezeBoard();
    }
  } 

  handleResetGameButtonClick = () => {
    // updates game state
    // deletes all view markers
    this.model.resetGameState();
    this.view.deleteAllMarkers();
  }

}

export default Controller;