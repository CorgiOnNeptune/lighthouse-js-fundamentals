// Given a x bottles, 
// determine how many containers (100's) can be filled

const howManyHundreds = (num) => {
  return Math.floor(num / 100);
}


// Verify results
console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);