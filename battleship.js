class Battleship {
  constructor(boardSize) {
    this.boardSize = boardSize;
    this.sunkShips = 0;
    this.shipCount = 5;
    this.ships = [
      {name:"Aircraft carrier", size:5, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0],[0,0],[0,0],[0,0]]},
      {name:"Battleship", size:4, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0],[0,0],[0,0]]},
      {name:"Submarine", size:3, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0],[0,0]]},
      {name:"Destroyer", size:3, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0],[0,0]]},
      {name:"Patrol boat", size:2, hits:0, direction:"Vertical", coordinates:[[0,0],[0,0],[0,0]]}
    ];

    this.createBoard();
    this.setShipLocation("A", 3, "vertical", 0);
    this.setShipLocation("E", 8, "horizontal", 1);
    this.setShipLocation("J", 10, "vertical", 2);
    this.setShipLocation("C", 4, "vertical", 3);
    this.setShipLocation("G", 3, "horizontal", 4);

    return this;
  }

  createBoard() {
    this.board = []; // create 2D array for game board

    for ( var row = 0; row < this.boardSize; row++ ) {
      var rowCollection = [];
      for ( var col = 0; col < this.boardSize; col++ ) {
        rowCollection[col] = "0";
      }
      this.board[row] = rowCollection;
    }
  }

  setShipLocation( coordA, coordB, direction, index ) {
    var shipIndex = 0;
    var shipSize = this.ships[shipIndex].size;

    while ( shipIndex < shipSize ) {
      var shipIndex = 0;
      var coordinates = [ coordA, coordB ];
      var direction = direction;

      for ( var next = 0; next < shipSize; next++ ){
        var newX = [(next - 2) + coord[0], coord[1]];
        var newY = [coord[0], (next - 2) + coord[1]];

        if ( direction == "Horizontal" && this.validShipCoordinate(newX) != false ) {
          coordinates[shipIndex] = newX;
          shipIndex++;
        } else if ( direction == "Vertical" && this.validShipCoordinate(newY) != false ) {
          coordinates[shipIndex] = newY;
          shipIndex++;
        } else {
          break;
        }
      }
    }

    this.ships[index].direction = direction;
    this.ships[index].coordinates = coordinates;
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

  setCellState( coordinates, type ) {
    if ( type === "Hit" ) {
      this.board[coord[0]][coord[1]] = "2";
    } else if ( type === "Miss" ) {
      this.board[coord[0]][coord[1]] = "1";
    } else if ( type === "Unknown" ) {
      this.board[coord[0]][coord[1]] = "0";
    }
  }

  checkShotCoordinates( coordinates ) {
    if ( coord[0] < this.boardSize && coord[0] >= 0 && coord[1] < this.boardSize && coord[1] >= 0 ) {
      if ( this.board[coord[0]][coord[1]] == "0" ) {
        return true;
      }
    }
    return false;
  }

  shipInCoordinates( coordinates ) {
    if ( coord[0] < this.boardSize && coord[0] >= 0 && coord[1] < this.boardSize && coord[1] >= 0 ) {
      for ( var i = 0; i < this.shipCount; i++ ) {
        for ( var x = 0; x < this.ships[i].coordinates.length; x++ ) {
          if ( this.ships[i].coordinates[x][0] == coord[0] && this.ships[i].coordinates[x][1] == coord[1] ) {
            return true; // shot is on map & coordinates are used by ship
          }
        }
      }
      return false; // shot is on map but coordinates are not used by ship
    }
    return false;
  }

  callYourShot( coordinates ) {
    var flag = false;

    for ( var i = 0; i < this.shipCount; i++ ) {
      for ( x = 0; x < this.ships[i].coordinates.length; x++ ) {
        if ( this.ships[i].coordinates[x][0] == coord[0] && this.ships[i].coordinates[x][1] == coord[1] ) {
          this.board[coord[0]][coord[1]] = 2;
          this.ships[i].hits++;
          flag = true;
        }
      }
    }

    if ( !flag ) {
      this.board[coord[0]][coord[1]] = 1;
    }
    this.sinkShip();
  }

  sinkShip() {
    var sunkShips = 0;
    for ( var i = 0; i < this.shipCount; i++ ) {
      if ( this.ships[i].hits == this.ships[i].size ) {
        sunkShips++;
      }
    }
    if ( sunkShips == this.shipCount ) {
      this.sunkShips = sunkShips;
      this.gameOver = true;
    }
    else if ( sunkShips > this.sunkShips ) {
      this.sunkShips = sunkShips;
    }
  }

} // end class
