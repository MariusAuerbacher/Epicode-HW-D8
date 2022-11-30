/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let arrayOfPositiveNumbers = [1, 2, 3, 4, 5,];

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

let personalInfo = {
  name: "Marius",
  surname: "Auerbacher",
  emailAddress: "mfb.auerbacher@gmail.com",
  age: 32
}

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

personalInfo.hasDrivingLicense = true;


/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete personalInfo.age;

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let anotherPerson = {
  name: "John",
  surname: "Doe",
  emailAddress: "johndoe@gmail.com"
}

if ( personalInfo.emailAddress === anotherPerson.emailAddress) {
  console.log("Email already used!");
} else {
  console.log("A verification email has been sent!");
}

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 56
if (totalShoppingCart > 50){
  console.log(totalShoppingCart);
} else {
  console.log(totalShoppingCart + 10)
}


/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let newTotalShoppingCart = 56
BlackFridayDiscount = newTotalShoppingCart *0.2
newTotalShoppingCart -= BlackFridayDiscount
console.log(newTotalShoppingCart)
if (newTotalShoppingCart > 50){
  console.log(newTotalShoppingCart);
} else {
  console.log(newTotalShoppingCart + 10)
}

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let myCar = {
  brand: "Toyota",
  model: "Land Cruise",
  licensePlate: "R90219"
}
let clone1 = Object.assign({}, myCar);
clone1.licensePlate = "R10239"
let clone2 = Object.assign({}, myCar);
clone2.licensePlate = "R70943"
let clone3 = Object.assign({}, myCar);
clone3.licensePlate = "R41829"
let clone4 = Object.assign({}, myCar);
clone4.licensePlate = "R12320"
let clone5 = Object.assign({}, myCar);
clone5.licensePlate = "R23123"

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/
let carsForRent = ["myCar", "clone1", "clone2", "clone3", "clone4", "clone5"]


/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

let carsForRent1 = ["myCar", "clone1", "clone2", "clone3", "clone4", "clone5"]
carsForRent.pop(0);
carsForRent.splice(0, 1);
console.log(carsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

let myCar1 = {
  brand: "Toyota",
  model: "Land Cruise",
  licensePlate: "R90219"
}
console.log(typeof myCar);
console.log(typeof myCar.licensePlate);
console.log(typeof myCar.brand);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

let carsForSale = [
  { brand: "Toyota", model: "Land Cruiser", licensePlate: "R23012"},
  { brand: "Mitsubishi", model: "Pajero", licensePlate: "R40329"},
  { brand: "Nissan", model: "Patrol", licensePlate: "R32102"}
  ]
let carsForRent2 = ["myCar", "clone1", "clone2", "clone3", "clone4", "clone5"]
let totalCars = carsForSale.concat(carsForRent);
console.log(totalCars)


/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

let carsForSale1 = [
  { brand: "Toyota", model: "Land Cruiser", licensePlate: "R23012"},
  { brand: "Mitsubishi", model: "Pajero", licensePlate: "R40329"},
  { brand: "Nissan", model: "Patrol", licensePlate: "R32102"}
]
for (let i = 0; i < carsForSale.length; i++) {
  let allCars = carsForSale[i];
  console.log("all cars:", carsForSale)
}


