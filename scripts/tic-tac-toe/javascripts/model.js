const CELL_COUNT = 9;

class Model {
  constructor () {
    console.log('Model Constructed')
    this.TIE_MARKER = 'tie';
    this.FIRST_WINS_MARKER = 'first';
    this.SECOND_WINS_MARKER = 'second';

    // 
    /**gamestate structure...
     * each number corresponds to ...
     * where each number is a cell number starting at '1'
     * {
     *   X: '9157',
     *   O: '264'
     * }
     */
    this.gameState = {X: '', O: ''}; 

    this.winningCombinations = [
      '123', '159', '147',  // top left win
      '258',                // top mid win
      '357', '369',         // top right win
      '456',                // mid left win
      '789',                // bot left win
    ]
  }

  resetGameState() {
    this.gameState.X = '';
    this.gameState.O = '';
  }

  updateGameState(cellnum, marker) {
    this.gameState[marker] += String(cellnum)
  }

  /** checkGameState
   *  -- checks if the state of the game is finished
   *  -- later features will indicate if marker 'X' or marker 'O' has won
   */
  
  checkGameState() {
    // check if the whole board is filled
    let XState = this.gameState.X;
    let OState = this.gameState.O;
    // here, we would need to check if anyone won
    
    // then iterate over 
    let boolStates = [XState, OState].map( state => {
      // getting a state, either X's state or O's state
      return this.winningCombinations.some( combination => {
        return combination.split('').every( cellId => {
          return state.includes(cellId);
        })
      })
    })

    if (boolStates.includes(true)) {
      return boolStates[0] ? this.FIRST_WINS_MARKER : this.SECOND_WINS_MARKER;
    }

    // tie at end of function, allows winner for last move
    if ((XState + OState).length === CELL_COUNT) return this.TIE_MARKER;
  }

  getComputerMove() {
    // will make a move based on state of the board
    // based on the chosen algo, this function was made for debugging
    let move = this.#scoreFactorAlgo('O');
    return move
  }

  #randomMoveAlgo() {
    let stateAry = (this.gameState.X + this.gameState.O).split('');
    while (true) {
      let randNum = getRandomNumber(1, CELL_COUNT);
      if (!stateAry.includes(String(randNum))) {
        return randNum;
      }
    }
  }

  #scoreFactorAlgo(marker) {
    // SF -- score factor weightings
    const EMPTY_SF = 1;
    const CRITICAL_WIN_SF = 1000;
    const CRITICAL_LOSS_SF = 100;
    const BLOCKING_SF = 2;
    const COMBINING_SF = 3;    

    // we get a string of numbers reflecting location of 
    // -- Os, Xs and E(empties) within the board
    // -- IE: Os = '168', Xs = '549', Es = '237'
    let OState = this.gameState.O;
    let XState = this.gameState.X;
    let EState = [].filter.call('123456789', char => { // OK
      return ![...OState, ...XState].includes(char)
    }).join('');

    // variables used for iteration
    let tmpMax = 0; 
    let indexOfMax = 0;

    [].forEach.call(EState, emptyInd => {
      // this is where the magic happens
      // gets the combinations of rows and columns based on emptyIndex
      let potentialCmbs = this.winningCombinations
        .filter(cmb => cmb.includes( String(emptyInd) ));
      
      
      // number of empty rows of columns
      let numEs = this.numOfMatches(EState, potentialCmbs); 
      // Note: OState||XState + emptyInd to simulate placed X or O
      // number of OOO combinations given emptyInd - win for O
      let numOs = this.numOfMatches(OState + emptyInd, potentialCmbs); 
      // number of XXX combinations given emptyInd - win for X
      let numXs = this.numOfMatches(XState + emptyInd, potentialCmbs);

      // Combination for able to double up positions
      // X -> XEX or XXE or O -> OEO or OOE
      let numEsOs = this.numOfMatches(EState + OState, potentialCmbs) - numEs;
      let numEsXs = this.numOfMatches(EState + XState, potentialCmbs) - numEs;
      numEsOs = numEsOs > 0 ? numEsOs : 0;
      numEsXs = numEsXs > 0 ? numEsXs : 0;

      // defining array then immediate reduced summation
      let sum = [
        numEs * EMPTY_SF,
        numOs * ((marker === 'O') ? CRITICAL_WIN_SF : CRITICAL_LOSS_SF),
        numXs * ((marker === 'X') ? CRITICAL_WIN_SF : CRITICAL_LOSS_SF),
        numEsOs * ((marker === 'O') ? COMBINING_SF : BLOCKING_SF),
        numEsXs * ((marker === 'X') ? COMBINING_SF : BLOCKING_SF)
      ].reduce((acm, num) => acm += num);

      if (sum > tmpMax) {
        tmpMax = sum;
        indexOfMax = emptyInd;
      }
    })

    return indexOfMax;
  }

  numOfMatches(state, potentialCombinations) {
    // based on the inputted state, which of the combinations within the 
    // -- potential combinations have the approriate indices.
    let matchCount = 0;
    potentialCombinations.forEach( combination => {
      let isMatch = [...combination]
        .every(indChar => state.includes(indChar));

      if (isMatch) matchCount += 1;
    })
    return matchCount;
  }
}

export default Model;

/**/
// lower & upper number incl
function getRandomNumber(lower, upper) {
  let num = Math.floor((Math.random() * (upper - lower + 1))) + lower;
  return num;
}