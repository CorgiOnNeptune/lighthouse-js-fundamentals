const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

// Parade beings at [0,0]. 
// Function calculates and returns an array 
// representing the position after completing all the moves
const finalPosition = function (moves) {
  const position = [0, 0];
  let x = 0;
  let y = 0;

  // There is definitely a cleaner way to solve this
  for (let move of moves) {
    if (move === 'north') {
      y++;
    } else if (move === 'south') {
      y--;
    } else if (move === 'east') {
      x++;
    } else if (move === 'west') {
      x--;
    }
    position[0] = x;
    position[1] = y;
  }
  console.log(position);
  return position;
}


// Result should print '[-1, 4]';
finalPosition(moves);