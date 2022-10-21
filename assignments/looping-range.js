// Return array of numbers from start to end counting by step
// (any param undefined || start > end || step <= 0) === []

const range = function range(start, end, step) {
  const output = [];

  if ((start !== undefined) && start < end && step > 0) {
    
    for (let i = start; i <= end; i += step) {
      output.push(i);
    }

    return output;

  }
  return output;  
}

// Verify results
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));