// Create new object with property of speed, 
// property of time, add it to cars array.
// Use Date.now() function for setting time

const carPassing = function (cars, speed) {
  const addCar = {
    time: Date.now(),
    speed: speed
  };

  cars.push(addCar);
  return (cars);
};

// Verify results
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

carPassing(cars, speed);
console.log(cars);
