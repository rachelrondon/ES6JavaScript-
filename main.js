// forEach practice

// Question 1: Processing Values

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


// Question 2: Plucking Values

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image) {
  return image.height;
})

var heights;

//  Question 3: Calculating Values with Map


var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) {
  return trip.distance / trip.time
})

var speeds;

// Question 4: Really Hard - Implementing 'Pluck'

var paints = [ { color: 'red' }, { color: 'blue' }, { color: 'yellow' }];

function pluck(array, property) {
  function pluckPaint (item) {
    return item[property];
  }

  var returnArray = array.map(pluckPaint);

  return returnArray;
}

pluck(paints, 'color');


// Filter method
// Filter out or sort in a list
// Return a filtered list of all of the items that have a type of vegetable

var products = [
  { name: 'cucumber', type: 'vegetable'},
  { name: 'banana', type: 'fruit'},
  { name: 'celery', type: 'vegetable'},
  { name: 'orange', type: 'fruit'},
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i]);
  }
}
filteredProducts;


products.filter(function(product) {
  return product.type === 'vegetable';
});

// Another example:


var products = [
  { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
  { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
  { name: 'celery', type: 'vegetable', quantity: 30, price: 13 },
  { name: 'orange', type: 'fruit', quantity: 3, price: 5 },
];

// We are filtering the products where type is 'vegetable', quantity is greater than 0, price is less than 10
products.filter(function(product) {
//  return the products where type is equal to vegetable
  return product.type === 'vegetable'
// return the products where quantity is greater than zero
  &&  product.quantity > 0
// return the products where price is less than 10
  && product.price < 10
});


var post = { id: 4, title: 'New Post' };
var comments = [
  { postId: 4, content: 'awesome post'},
  { postId: 3, content: 'it was ok' },
  { postId: 4, content: 'neat' }
];

function commentsForPost(post, comments) {
  return comments.filter(function(comment) {
    return comment.postId === post.id;
  });
}


commentsForPost(post, comments);

// Question 5: Filtering Values

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

// Here filteredNumbers is defined and set equal to numbers.filter.
// It is passed number, and set to return numbers that are greater than 50.
var filteredNumbers = numbers.filter((number) => {
  return number > 50;
});

filteredNumbers;


// Question 6: Handling Permissions with Filter

// Filter the array of users, only returning users who have admi level access.
// Assign the result to the variable 'filteredUsers'.
// Don't forget to use the 'return' keyword in the function.

// need to continue to work on this solution
var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: false }
];

var filteredUsers = users.filter((user) => {
  return user.admin;
});

var filteredUsers;



// Question 7: Implementing 'reject'

// A reject function has been defined and it is passed an array and an iteratorfunction
function reject(array, iteratorFunction) {
// the filter helper method is performed on the array
  return array.filter(function(element) {

    return !iteratorFunction(element)});
  }


// Find Helper method

// The Car function is defined and passed the parameter of model
function Car(model) {
	this.model = model;
}

// The car array is defined
var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
 ];

// The find helper method is performed on the cars array
cars.find(function(car) {
// The car with the model of Focus will be returned
  return car.model === 'Focus';
});

// Another Example:

// The posts array is defined
var posts = [
  { id: 1, title: 'New Post' },
  { id: 2, title: 'Old Post' }
];

// The comment object is defined
var comment = { postId: 1, content: 'Great Post' };

// the postForComment function is defined and passed the parameters posts and comment
function postForComment(posts, comment) {
// The find helper method is performed on posts and is passed a iterator function
  return posts.find(function(post) {
// return the comments that match with the post id.
    return post.id === comment.postId;
  });
}

postForComment(posts, comment);


function Car(model) {
  this.model = model;
}

var cars = [
// this.model = 'Buick'
  new Car('Buick'),
// this.model = 'Camaro'
  new Car('Camaro'),
// this.model = 'Focus'
  new Car('Focus')
];

cars.find(function(car) {
  return car.model === 'Focus';
});


// Example:
// Out of all of the posts, find the post with the id of 45

// An array of posts
const posts = [
  {id: 1, title: 'Post title'},
  {id: 2, title: 'Post title'},
  {id: 3, title: 'Post title'},
  {id: 4, title: 'Post title'},
  {id: 5, title: 'Post title'},
  {id: 6, title: 'Post title'}
];

const postId = getIdFromURL();
// Walk through the posts and find the id that equals 45
posts.find(post => post.id === postId);


// Question 8:
// Find the user in the user's array who is an admin.
// Assign this user to the variable 'admin'


var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(user => {
  return user.admin === true;
});

admin;

// Question 9: What's Your Balance
// Find the account with a balance of 12 and assign it to the variable 'account'.
var accounts = [
  { balance: - 10},
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(account => {
  return account.balance === 12;
});

account;

// Question 10: Custom findwhere Helper


var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

function findWhere(array, criteria) {
  var property = Object.keys(criteria)[0];

  return array.find(ladder => {
    return ladder[property] === criteria[property];
  });
}

findWhere(ladders, { height: 25 });


// Every & Some Helper Methods

var computers = [
  { name: 'Apple', ram: 24},
  { name: 'Compaq', ram: 4},
  { name: 'Acer', ram: 32 }
];

// Here the question is solved with a for loop
var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
  var computer = computers[i];

  if (computer.ram < 16 ) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

"---"
allComputersCanRunProgram;
onlySomeComputersCanRunProgram;


// Every Helper Method
// Look at all of the values being returned
computers.every(function(computer) {
  return computer.ram > 16;
  // this will return false
});

// Some Helper Method
// There is an 'or' value between all of the operators

computers.some(function(computer) {
  return computer.ram > 16;
});


// Another Example:

var names = [
  'Alexandria',
  'Matthew',
  'Joe'
];

names.every(function(name) {
  return name.length > 4;
  // this will return false
});

names.some(function(name) {
  return name.length > 4;
});

// Example:

function Field(value) {
  this.value = value;
}


Field.prototype.validate = function() {
  return this.value.length > 0;
}

var username = new Field('2cool');
var password = new Field('my_password');
var birthdate = new Field('10/10/2010');


var fields = [username, password, birthdate];

var formIsValid = fields.every(function(field) {
  return field.validate();
});


if (formIsValid) {
// allow user to submit
} else {
// show an error message
}


// Question 11: Finding Submitted Users
// Given an array of users, return 'true' if every user has submitted a request form.
// Assign the result to the variable 'hasSubmitted'


var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(user => {
  // We can do this because every returns a boolean
  return user.hasSubmitted;
});

// Question 12: In Progress Network Requests

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(request => {
  return request.status === 'pending';
})

// What is the difference between every and some?

// Every helper method
  //  For every element in the array we will pass the iterator function and it will return a true or false.
  //  We will take a boolean value from each element and then reduce it down to one boolean element as the result.


// Some helper method
  // There is an 'or' operator between any value
  // Do any records in this array satisfy this criteria?



// Reduce Helper Method
  // One of the most flexible helper methods

var number = [ 10, 20, 30 ];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);


var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

primaryColors.reduce(function(previous, primaryColor) {
  previous.push(primaryColor.color);

  return previous;
}, []);
// reduce can be used to sum all of the numbers in an array
// We pass in an initial value (0)
// Sum and number are the arguments for the function


// Coding Question:

// Given a string that contain some number of parenthesis, are the expressions correctly balanced?
// Write a function to check if the parenthesis is balanced.


// We want a function that takes a string and returns a boolean

// We are receiving a string
function balancedParens(string) {
  // string.split("") will turn the string into an array of single characters
  // Then we will add in the reduce helper
  // Char represents a single character

  // To solve this, we will create a counter
  // ! is a flip of boolean
  return !string.split("").reduce(function(previous, char) {
    if (previous < 0) { return previous; }
    // if the character is an open parathesis return ++previous
     if (char === "(") { return ++previous; }
     // if the character is a closing parathesis return --previous
     if (char === ")") { return --previous; }
     return previous;
  }, 0);
}

balancedParens("((((");


// Question 13: Distance Traveled
  // Use the 'reduce' helper to find the sum of all the distances traveled.
  // Assign the result to the variable 'totalDistance'
  var trips = [{ distance: 34 }, { distance: 12}, { distance: 1 }];

  var totalDistance = trips.reduce(function(previous, trip) {
      return previous + trip.distance;
  }, 0);

  totalDistance;

  // Question 14: Reducing Properties
  // Use the reduce helper to create an object that tallies the number of sitting and standing desks.

  var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting ' },
    { type: 'sitting' },
    { type: 'standing' }
  ];

  var deskTypes = desks.reduce(function(accumulator, desk) {
    if (desk.type === 'sitting') ++accumulator.sitting;
    if (desk.type === 'standing') ++accumulator.standing;
    return accumulator;
  }, { sitting: 0, standing: 0 });


  // Question 15: Custom 'Unique' Helper
  // Write a function called 'unique' that will remove all the duplicate values from an array

  var numbers = [1,1,2,3,4,4];

  function unique(array) {
    return array.reduce((accu, item) => {
      if (!accu.find(acc => acc === item))
       accu.push(item);
      return accu;
    }, [])
  }
  unique(numbers);


// Variable Declarations: Const and Let
  // Features that bring new functionality to JavaScript
  // ES6 - Do not use var
  // Use const or let
  // Const - keyword used to declare variables where we expect the value to never change
  // Let - keyword used to declare a variable that the value may change overtime
  // We use Const and Let to make our code more legible


// Template Strings
// String interpolation
// Use backticks and then add ${} when you want to inject a JavaScript expression

function getMessage() {
	const year = new Date().getFullYear();

  return `The year is ${year}`;
}

getMessage();

// ES6 Arrow Functions

const add = (a, b) => {
  return a + b;
}

const newSum = add(1, 2);
newSum;

// Another Example

const double = number => 2 * number;
// If we have a single argument (which is number) we can remove the parenthesis about it.
double(8);


const double = (number1, number2) => {
  return 2 * number1 + 2 * number2;
};

double(8, 7);


// Condensed code with fat arrow functions
const numbers = [1,2,3];
numbers.map(number => 2 * number);


// this //
const team = {
  members: ['Jane', 'Bill'],
  teamName: 'Super Squad',
  teamSummary: function() {
    // this === team
    // lexical this
    // lexical = the placement of this term depends on how it is interperated or evaluated.
    // It depends on where it is placed within the fat arrow function
    return this.members.map(member) => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};

team.teamSummary();


// Another example:

const profile = {
  name: 'Alex',
  getName: function() {
    return this.name;
  }
};


// Syntactic changes to the language
  // Enhanced object literals

// create a function and pass it the inventory parameter.
function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent JavaScript', price: 15}
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle(Harry Potter);


// forEach helper method built into the array object
// this method is codified into ES6

var colors = [ 'red', 'blue', 'green'];
// this is a solution using a for loop
  for (let i = 0; i < colors.length; i++) {
  	console.log(colors[i]);
	}
// for loops are prone to typo's which is why we may not want to use a for loop
// array helpers help with iteration over an array

var colors = [ 'red', 'blue', 'green'];

colors.forEach(function(color) {
  // forEach is the array helper method
  // colors is the array that forEach is called on
  // When we call the forEach method we pass in an anonymous function
  // The function is called one time for every element in the array
  // for forEach behaves the same as a for loop
  // the forEach is less code
  console.log(color);
});



// Create an array of numbers
let numbers = [1,2,3,4,5]
// Create a variable to hold the sum
let sum = 0;
// Loop over the array, incrementing the sum variable
numbers.forEach(function(number) {
  sum += number;
})
// print the sum variable
sum;


// Another Example:

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];

  posts.forEach(function(post) {
    savePost(post);
  });
}

function savePost(post){
  console.log('saving post:' + post.title)
}

handlePosts();

// Another Example: Processing Values

var images = [
  { height: 10, width: 30},
  { height: 20, width: 90},
  { height: 54, width: 32 }
];

var areas = [];

images.forEach(function(image) {
 areas.push(images.height*images.width);
})

// map helper - the most used helper method

// write a loop that iterates over a loop of numbers
// doubles the numbers in the array
// pushes the doubled values into a new array

let numbers = [1, 2, 3];
let doubled = []

for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i]* 2);
}

doubled;


// Write this code with the map helper method

let numbers = [1, 2, 3];

let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

doubledNumbers;


var cars = [
  { model: 'Buick', price: 'CHEAP'},
  { model: 'Camaro', price: 'expensive'}
];

var prices = cars.map(function(car) {
  return car.price;
});

prices;



Answer:

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(images) {
  return images.height;
})

var heights;


// Use the map helper method to return the heights in a new array

var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];


let heights = images.map(function(images) {
  return images.height;
})

heights;


// Answer:

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function(trip) {
  return trip.distance / trip.time
})

var speeds;


// Answer:

var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: false }
];

var filteredUsers = users.filter((user) => {
  return user.admin === true;
});

var filteredUsers;


//

var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: false }
];

var filteredUsers = users.filter((user) => {
  return user.admin;
});

var filteredUsers;

//

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(user => {
  return user.admin === true;
});

admin;


//

var accounts = [
  { balance: - 10},
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(account => {
  return account.balance === 12;
});

account;

//


var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(user => {
  return user.hasSubmitted;
});
// Enhanced Object literals
// write object literals in a more compact fashion
// when the key- value pairs are the same we can only list one
// this will condense it to a single statement
// if you have a key-value pair the value is the function you can remove the function keyword and the :
function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0)
      // 0 is the starting value of our inventory
    },
    priceForTitle(title){
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10},
  { title: 'JavaScript', price: 15 }
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');

// Use jQuery to post data or put in a request to come endpoint
// Move the shortened variables to the left side
// You can also put them into a vertical list

function saveFile() {
  $.ajax({
    url,
    data,
    method: 'POST' });
}

const url = 'http://fileupload.com';
const data = { color: 'red' };

saveFile(url, data);


// default function arguments
// you do not need to do an existence request
// in the argument you can update the method in the argument to the default of 'GET'
// this is replaced:
// if (!method) {
  // method = 'Get';
// }
function makeAjaxRequest(url, method = 'GET') {

  return method;
  // logic to make the request
  // get is the most common request
}

makeAjaxRequest('google.com', null);
// null will not try to re-assign method to 'GET';

makeAjaxRequest('google.com', 'GET');


// Continued...
// make a function that will create a user object

function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 999999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;

  return user;
}

const user = new User(generateId());
createAdminUser(user);

// Rest and Spread operators
// the rest operator is ...
function addNumbers(...numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers([1,2,3,4,5,6,7,8,9,10]);

// spread operator is used to spread them out
// display a pallete of colors to our users


const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];

defaultColors.concat(userFavoriteColors);

// the concat method is a method that exists on every single array
// we can pass in a new array and it will join

// We can use the spread operator to make the exact same effect


const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

[ 'green', 'blue', ...fallColors, ...defaultColors, ...userFavoriteColors ];
// here we are creating a new array
// inside we referenced an existing array and put ... in front of it
// the same process is repeated for userFavoriteColors
// It allows you to see exactly what you are doing with this line of code
// Benefit: can add in additional arrays and new elements


function validateShoppingList(...items) {
  if (items.indexOf('milk') < 0) {
    return [ 'milk', ...items ];
  }

  return items;
}

validateShoppingList('oranges', 'bread', 'eggs');


//

const MathLibrary = {
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};



// forEach

var colors = ['red', 'blue', 'green'];

for (let i = 0; i < colors.length; i++ ) {
  return colors[i];
}

colors;


// Create an array of numbers
// Create a varible to hold the sum
// Loop over the array, incrementing the sum variable
// print the sum variable

let numbers = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  return sum += 1;
}


// rest operator

function addNumbers(...numbers) {

  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1,2,3,4,5,6,7);

// spread operator
// used to spread variables out

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];

defaultColors.concat(userFavoriteColors);


// ES6 - Enhanced Object Literals

function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total,book) => total + book.price, 0);
      },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  {title: 'Harry Potter', price: 10},
  {title: 'JavaScript', price: 15}
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');


// Example:
// Use JQuery to post data

function saveFile(url, data) {
// $.ajax({ method: 'POST', url: url, data: data });
  $.ajax({
    url,
    data,
    method: 'POST'
  });
}


const url = 'http://fileupload.com';
const data = { color: 'red' };

saveFile(url, data);



// Specifying Default Function Arguments
function makeAjaxRequest(url, method = 'GET') {
  return method;
  // you do not have to do an existance check anymore.
  // you can add this in the argument list of the function
  // if (!method) {
  //   method = 'GET';
  // }
  // logic to make the request
}

makeAjaxRequest('google.com', null);
// if you pass in 'null', it will not get reassigned.
// if you pass in 'undefined' it will be reassigned to 'GET'
makeAjaxRequest('google.com', 'POST');


// Default Function Arguments continued...
// Write a function that will create a user
// Every time a user is created they must be asigned an id
function User(id) {
  this.id = id;
}

User(1);
console.log(id)
// This creates a user with an id of 1


function generateId() {
  // this will create a random id
  return Math.random() * 9999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;

  return user;
}

const user = new User(generateId());
createAdminUser(user);

// REST and SPREAD operators
// Write less code (this is the purpose)

// Reduce array helper - this is used to compact all of the values in an array
// Sum up all of the numbers in an array

function addNumbers(...numbers) {
// the rest operator is ...
// accept that there will be some number of arguments
// What to capture the arguments and put them into an array of numbers
// The rest operator is used in function arguments
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1,2,3,4,5,6,7);


// The spread operator
// This is used to flatten or spread out

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];

defaultColors.concat(userFavoriteColors);

// the concat method combines the two arrays

// You can use the spread operator instead

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColors = ['fire red', 'fall orange'];

[ 'blue', ...fallColors, ...defaultColors, ...userFavoriteColors ];

/// the ... is the spread operator
// this combines the two arrays
// The output is identical to using the concat method
// This helps use view what is exactly happening with this array
// By using the spread operator to concat arrays together you can add an element into the array
// You can mix and match the spread and rest operators

function validateShoppingList(...items) {
  // if milk does not exist in the items, add milk to the list of items.
 if (items.indexOf('milk') < 0) {
   return [ 'milk', ...items ];
 }

 return items;
}

validateShoppingList('oranges', 'bread', 'eggs')

// the indexOf() method returns the index within the calling string object.
// example: str.indexOf(searchValue[, fromIndex])


const MathLibrary = {
  // This will handle passthrough of arguments to different functions
  calculateProduct(...rest) {
    console.log('Please use the multiply method instead')
    return this.multiply(...rest);
  },
  multiply(a,b) {
    return a * b;
  }
};

// Destructuring
// This gives you flexibility over the style of the code that you write

var expense = {
  type: 'Business',
  amount: '$45 USD'
};

var type = expense.type;
var amount = expense.amount;

// Reduce the amount of duplicate code that we see

const { type } = expense;
const { amount } = expense;

// This can be re-declared

const { type, amount } = expense;
type;
amount;

// I want to declare a variable called amount
// I want to assign it to a variable called expense.amount

// Destructuring - dramatically decreases that amount of code that we will need to write
// Can be used to pull properties off of objects

var savedFile = {
  extension: 'jpg';
  name: 'repost',
  size: 14040
};

function fileSummary({ name, extension, size }) {
  return `The file ${name}.${extension} is of size ${size}`
}

fileSummary(savedFile, { color: 'red' });

// Destructe out of arrays

const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [ name, name2, name3, name4 ] = companies;
const { length } = companies;

name;
name2;
name3;
typeof name4;

const [ name, name2, ...rest ] = companies;
name
name2
rest;

// This is a better way to write the following:

const firstCompany = companies[0];
const secondCompany = companies[1];
const thirdCompany = companies[2];


//
const companies = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', location: 'Menlo Park' },
  { name: 'Uber', location: 'San Francisco' }
];

var [{ location }] = companies;
location

//

Const Google = {
  locations: [ 'Mountain View', 'New York', 'London']
};

// regular way to access Mountain View:

Google.locations[0]
// This is how you acces with destructuring

const { locations: [ locations ] } = Google;

locations;

// Destructing in a practical environment

function signup(username, password) {
  // create a new user
}
signup('myname', 'mypassword');


// ES6 Practice:

let name = 'Rachel\'s';
console.log(name);

let birthday = ' Birthday';
console.log(birthday);

let birthdayMonth = ' May';
console.log(birthdayMonth);

name.concat(birthday).concat(birthdayMonth);

// ES6

[...name, ...birthday, ...' is in ', ...birthdayMonth ]

// Destructing - to improve our codebase and how we write our code

function signUp(username, password, email, dateOfbirth, city) {
// create new user

}
// other code
// other code
// other code

signUp('myname', 'mypassword', 'myemail@example.com', '1/1/1990', 'New York');

const user = {
  username: 'myname',
  password: 'mypassword',
  email:'myemail@example.com',
  dateOfbirth: '1/1/1990',
  city: 'New York'
};

signUp({username, password, email, dateOfbirth, city})

//
const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

// We are trying to transform our data in some fashion
[
  { x: 4, y: 5 },
  { x: 10, y: 1 },
  { x: 0, y: 40 }
]
// How to do this with ES6

points.map(([ x, y ]) => {
  return { x, y};
});

// Introduction to classes
// Inheritance
// Object inheritance
// Prototypal inheritance
// Classes are not an absolute solution

// declared a Car object
function Car(options) {
  this.title = options.title;
}

// added one method to it
Car.prototype.drive = function() {
    return 'vroom';
}

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);

Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
  return 'beep';
}


const toyota = new Toyota({ color: 'red', title: 'Daily Driver'});
toyota;


// Refactoring with classes

class Car {
  constructor({ title }) {
    this.title = title;
  }

  drive() {
    return 'vroom';
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options);
    // Car.constructor()
    this.color = options.color;
  }

  honk(){
    return 'beep';
  }
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });
'----';
toyota.honk();
toyota.drive();
toyota;

// When do you use classes?

React.createClass({
  doSomething() {

  }

  doSomethingElse(){

  }
});

class MyComponet extends Component {
  doSomething() {

  }

  doSomethingElse(){

  }
}

// More ways to iterate through collections
// For of loop
// This is for iterating through arrays of data

const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
}

const numbers = [1,2,3,4];

let total = 0;
for (let number of numbers) {
  total += number;
}

// Introduction to Generators
// A generator is a function that can be entered and exited multiple times
// We can run some code, return a value, and then go back into the function
// Focus on the syntax

// We use generators for iteration
// Generator delegation: how to get generators to work together
// A generator is a function that can be entered and exited multiple times
// With generators we can run some code, return a value and then return back into it.

function* shopping() {
  // stuff on the sidewalk

  // walking down the sidewalk

  // go into the store with cash
  const stuffFromStore = yield 'cash';

  const cleanClothes = yield 'laundry';
  // by adding the star we create a generator function

  // walking back home
  return [ stuffFromStore, cleanClothes];
}

  // stuff in the store
const gen = shopping();
gen.next(); // leaving our house
// walked into the store ..
// walking up and down the aisles ..
// purchase our stuff ..
// Add another yield statement

gen.next('groceries'); // leaving the store with groceries
gen.next('clean clothes');
// We can call yield inside a generator multiple times
// generators ...


// For of loop
// You can use this to iterate through an array

function* color() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

const gen = color();
gen.next();
gen.next();
gen.next();
gen.next();


// generators work really well with for of loops

const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}
myColors;

// we can use generators to iterate through any data structure that we want

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  const testingTeamGenerator = testingTeamIterator(team.testingTeam);
  yield* testingTeamGenerator;
}

function* testingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const names = [];

for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}

names;
// How to combine mutiple generators together
// Delegation of generators
// symbol iterator is a tool that teachs objects how to respond to the for of loop


// Tree - popular data structure that can be used for a variety of purposes
// Trees are everywhere in web applications


// Create a tree and then iterate through it
// Create a tree datastructure


class Comment {
  constructor(content, children){
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment('good comment', []),
  new Comment('bad comment', []),
  new Comment ('meh', [])
];

const tree = new Comment('Great post!', children);

const values = [];
for (let value of tree) {
  values.push(value);
}
values;
]


promise = new Promise((resolve, reject) => {
  resolve();
});

promise.then(() => {
  console.log('finally finished!');
})

//
promise = new Promise((resolve, reject) => {
  var request = new XHTMLRequest
  // make request
  request.onload = () => {
    resolve();
  };
});

// two .then
promise
  .then(() => console.log('finally finished!'))
  .then(() => console.log('I was also ran!'))
  .catch(() => console.log('uh oh!')

// fetch
// decide which URL we want to make a request to

url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url)
  .then(response => console.log(response));
  .catch(error => console.log('BAD', error));


// FizzBuzz Challenge
// Write a JavaScript snippet that prints console.log() all numbers from 1 to 100 with the following exceptions:
// If a number is divisible by 3, print 'Fizz' instead of the number
// If a number is dividible by 5, print 'Buzz' instead of the number
// If a number is divisible by 3 and 5, print 'FizzBuzz' instead of the number

function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    console.log('FizzBuzz');
  }  else if (number % 5 === 0) {
    console.log('Buzz');
  } else if (number % 3 === 0) {
    console.log('Fizz')
  }
}

fizzBuzz(10);

// Guess the number

let x = 5;
let userInput=prompt('Guess a number between 1 - 10')

while (x!==userInput) {
  if (userInput > 5) {
    alert ('too high')
    userInput=parseInt(prompr('Guess a number between 1 - 10'));
  } else if (userInput < 5) {
    alert ('too low')
    userInput=parseInt(prompt('Guess a number between 1 - 10'));
  } else {
    alert ('you are correct!')
  }
}

// Adventure Story

let transportation = prompt('What is your favorite mode of transportation?');
let destination = prompt('What is your favorite place to visit');
let fear = prompt('What are you most afraid of?');
let secretWeapon = prompt('What is your secret weapon?');
let enemy = prompt('Who is your worst enemy?');
let profession = prompt('What is your dream profession?');

let answers = [
  ['driving', 'walking', 'taking the subway', 'flying'],
  ['Manhattan', 'Brooklyn', 'Queens', 'Bronx', 'Staten Island'],
  ['a zombie', 'a vampire', 'a sorcerer', 'ork', 'leprechaun'],
  ['wit', 'strength','tenacity', 'intuition', 'perception'],
  ['apocalypse', 'a horrible reality show', 'rush hour traffic', 'a delayed subway', 'a near death experience'],
  ['teacher', 'doctor', 'librarian', 'chemist', 'superhero']
];

console.log('Today, I was ' + transportation + ' to ' + destination + ' On my way, I encountered ' + fear + ' I had to use my ' + secretWeapon + ' to escape the horrible cluthes of ' + enemy + ' All in a days work as a ' + profession)


// MTA
let userInput = prompt('L train, N train, or 6 train?')

let lTrain = ['8th Ave', '6th Ave', 'Union Square', '3rd Ave', '1st Ave', 'Bedford Ave'];
let nTrain = ['Times Square', 'Herald Square', '28th St.', '23rd St.', 'Union Square', '8th St.'];
let sixTrain = ['Grand Central', '33rd St', '28th St', '23rd St', 'Union Square', 'Astor Place'];

if (userInput === 'L') {
    console.log(userInput + ' train');
    console.log(lTrain);
} else if (userInput === 'N') {
  console.log(userInput + ' train');
  console.log(nTrain);
} else if (userInput === '6') {
  console.log(userInput + ' train');
  console.log(sixTrain);
}

// Movie Database Function

var blade = {
  title: 'blade',
  director: 'Stephen Norrington',
  actors: ['Wesley Snipes', 'Stephen Dorff', 'Kris Kristofferson'],
  releaseYear: 1998,
  duration: 120
}


function movieTitle() {
  return blade.title;
}

movieTitle();

function movieDirector() {
  return blade.director;
}

movieDirector()

function releaseYear() {
  return blade.releaseYear;
}

releaseYear()

function increaseYear() {
  return blade.releaseYear + 25;
}

increaseYear()

// Write a for loop to print each of the actor's names

function movieActors() {
  for (let i = 0; i < blade.actors.length; i++) {
    return blade.actors;
  }
}

movieActors()

// Reading List

var readingList = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    alreadyRead: false
  },
  {
    title: 'Harry Potter and the Order of the Phoenix',
    author: 'J.K. Rowling',
    alreadyRead: true
  }
];


function printReadingList() {
  for (let i = 0; i < readingList.length; i++) {
      console.log(readingList[i].title);
  }
}

printReadingList();


function printBookInfo() {
  for (let i = 0; i < readingList.length; i++) {
    console.log(readingList[i].title + ' by ' + readingList[i].author)
  }
}

printBookInfo();


function completedBooks() {
  for (let i = 0; i < readingList.length; i++) {
    if (readingList[i].alreadyRead === true) {
      console.log('You already read this book!')
    } else {
      console.log('You have not read this book!')
    }
  }
}

completedBooks();


// Tom Brady Functions

let tomBrady = {
  firstName: 'Tom',
  lastName: 'Brady',
  height: [6,4],
  weight: 225,
  teammates: [
    {
      firstName: 'Rob',
      lastName: 'Gronkowski',
      age: 27
    },
    {
      firstName: 'Julian',
      lastName: 'Edelman',
      age: 30
    },
    {
      firstName: 'Dion',
      lastName: 'Lewis',
      age: 26
    }
  ],
  superBowlRings: 4,
  throwFootball: function() {
    return 'Touchdown!';
  },
  introduce: function() {
    console.log(`I am ${this.firstName} ${this.lastName}`);
  }
};

let question = function(){
  console.log(`Hey ${tomBrady.teammates[0].firstName} ${tomBrady.teammates[0].lastName}, are you ready to score some touchdowns?!`)
}

question();


// enhanced object literals


function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function() {

    }
  };
}


const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'JavaScript', price: 15 }
];


const bookShop = createBookShop(inventory);

/* regular expressions */
/* Everything is a character and we are writing patterns to match a specific sequence of characters
/* A regular expression provides a concise and flexible means to "match" (specify and recognize) strings of text, such as particular characters, words, or patterns of characters */

[a-z]
//[a-z] is called a class of characters it means all characters between "a" to "z";
+
// this is a quantificator that means one to infinite
// this means 1 and plus
^
// this means from the beginning
\
// this means that the next character is not special and should be interperated literally
\d
// this matches a digit character
$
// this means from the end
.
// this means "Any character"
*
// this is a quantificator that means from 0 to infinite time
.*
// this means any string, even the empty string
?
// this means zero or one
{4,6}
// this means from 4 to 6
{4,}
// this means from 4 to infinite
{,6}
// this means from 0 to 6
{0,}
// this is the same as *
{1,}
// this is the same as +
{4}
// this means 4

[^e]
// this means anything but e
[a-z0-9._%+-]
// this means any characters between a to z, 0 to 9 a dot "." an underscore "_" a plus "+" a hypen "-" or a percentage "%"
// inside the brackets [], the dot character and the plus character does not mean a class character or quantificator but is used for its literal meaning dot "." and plus "+"


str.match
// use the match method to return an array containing all the occurrences of the pattern inside the text, null otherwise

var myRegexp = /ain/g;
var str= "The rain in SPAIN stays mainy in the plain";
var occurrences = str.match(myRegexp);

g
// the "modifier in ain/g is used to find all matches rather than stopping after the first match"

// regexp sample:
var text = "Michael is born the 1972-11-22, John the 1973-04-15 and Mary the 1972-11-21. Can someone tell me the biggest age?"
var regDate = /\d{4}-\d{2}-\d{2}/g;
// this means digit character that contains 4 characters, "-", digit charater that contain two characters, "-", digit character that contains two characters. Find all occurrences, do not stop at the first 


/* Check if a string contains letters from A to C */

// var AtoC = /[a-z]/;
// if (AtoC.test('aacczzz')){
//   console.log('aacczzz has the [a-c character at least once]');
// }
