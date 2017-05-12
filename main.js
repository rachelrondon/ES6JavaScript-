// forEach practice

// Question One: Processing Values

var images = [
  { height: 10, width: 30},
  { height: 20, width: 90},
  { height: 54, width: 32 }
];

var areas = [];

images.forEach(function(image) {
  areas.push(image.width * image.height);
});


// Map practice
// map is used to motify records in some list of data

// Here we are defining an array of numbers
var numbers = [1,2,3];
// Here were are defining an empty array that the doubled numbers will be pushed into
var doubledNumbers = [];

// Here we are defining a for loop;
for (var i = 0; i < numbers.length; i++) {
// For each iteration of the numbers array, the number is doubled and pushed into the doubledNumbers array
  doubledNumbers.push(numbers[i] * 2);
}
// Here we are using the map function to return the doubled numbers
var doubled = numbers.map(function(number) {
  return number * 2;
});

// Both the for loop and the map function return the same result
doubled;
doubledNumbers;

// Second Example:
var cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'expensive' }
];

// Here we are plucking a particular property off of each object within the array
var prices = cars.map(function(car) {
  return car.price;
});

prices;


// Question Two: Plucking Values

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image) {
  return image.height;
})

var heights;

//  Question Three: Calculating Values with Map


var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) {
  return trip.distance / trip.time
})

var speeds;

// Question Four: Really Hard - Implementing 'Pluck'
var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(array, property) {
  function pluckPaint (item) {
    return item[property];
  }

  var returnArray = array.map(pluckPaint);

  return returnArray;
}

pluck(paints, 'color');
