# Battleship API

Create a class or classes that represent an API for the game battleship.

## Rules of battleship

- Plot all of your ships by drawing an outline of each ship on the grid according to its size. For example, a battleship is four blocks, but an aircraft carrier is five blocks.
- Take turns firing upon the enemy by calling out plot points - for example: A-5. Mark your shot as a hit (X) or a miss (O) on your enemy ship grid according to your opponents reply.
- When your enemy fires upon you, answer hit or miss, according to their shot.
- When the ships are sunk, you must inform your opponent that it is sunk and which ship it is, for example, "My aircraft carrier is sunk!".
- The first person to sink all of the enemy ships wins the game.

## Game pieces
- aircraft carrier: 5 holes
- battleship: 4 holes
- submarine: 3 holes
- destroyer: 3 holes
- patrol boat: 2 holes

## Main Functions

The constructor of the app sets up the board (accepting the users choice of board size) and sets the ships locations. From there the main functions that pertain to game play are:

**callYourShot( coordinates )**: This function accepts an array of coordinates, then compares that to ships locations on the board and determines whether there was a hit. It adds a hit to the ships object and calls the sinkShips function.

**sinkShips()**: This function compares the number of hits on the ships object to its size and determines whether it is damaged or sunk.