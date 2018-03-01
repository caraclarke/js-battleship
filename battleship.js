/*Battleship Constructor*/
class Battleship {
  constructor(boardSize) {
    this.boardSize = boardSize;

    this.createBoard();
    this.createShips();
    this.createGame();

    this.setShipLocation(0);
    this.setShipLocation(1);
    this.setShipLocation(2);
    this.setShipLocation(3);
    this.setShipLocation(4);

    return this;
  }

  createBoard() {
    this.board = []; // create 2D array for game board

    for(var row = 0; row < this.boardSize; row++){
      var rowCollection = [];
      for(var col = 0; col < this.boardSize; col++){
        rowCollection[col] = "0";
      }
      this.board[row] = rowCollection;
    }
  }

  createShips() {
    this.ships = {
      0:{name:"Aircraft carrier", size:5, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0],[0,0],[0,0],[0,0]]},
      1:{name:"Battleship", size:4, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0],[0,0],[0,0]]},
      2:{name:"Submarine", size:3, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0],[0,0]]},
      3:{name:"Destroyer", size:3, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0],[0,0]]},
      4:{name:"Patrol boat", size:2, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0],[0,0]]}
    };

    this.shipCount = 5;
  }

  checkCellState(coordinates) { // return cell state given opposing player guess coordinates
    if ( this.board[coordinates[0]][coordinates[1]] == "2" ) {
      return "Hit";
    } else if ( this.board[coordinates[0]][coordinates[1]] == "1" ) {
      return "Miss";
    } else if ( this.board[coordinates[0]][coordinates[1]] == "0" ) {
      return "Unknown";
    }
  }

  callYourShot(coordinates, type) { // set cell state when player calls shot
    if ( type == "Hit" ) {
      this.board[coord[0]][coord[1]] = "2";
    } else if ( type == "Miss" ) {
      this.board[coord[0]][coord[1]] = "1";
    } else if ( type == "Unknown" ) {
      this.board[coord[0]][coord[1]] = "0";
    }
  }

} // end class
