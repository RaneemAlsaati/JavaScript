console.log("hi");
console.log("hej");
var items = [];
console.log("items indeholder []");
console.log(items);
let animals = ["cat", "dog", "elefant"];
console.log(animals);
animals.push("baby pig");
console.log(animals);
let myString = "this is a test";
console.log(myString);
let myNumber = 3;
console.log(myNumber);
let myArray = [""];
console.log(myArray);
let myObject = {};
console.log(myObject);
console.log(typeof myNumber);
console.log(typeof myArray);
console.log(typeof myString);
console.log(typeof myObject);
var  yearOfBirth = 1991;
var yearFuture = 2027;
var age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);
var  dogYearOfBirth = 2009;
var dogYearFuture  = 2027;
var dogAge = 10;
var shouldShowResultInDogYears = true;
if (shouldShowResultInDogYears) {
    console.log("Your dog will be " + dogAge * 7 + " dog years old in " + dogYearFuture);    
} else {
    console.log("Your dog will be " + dogAge + " human years old in " + dogYearFuture);
}
var wide = 8;
var high = 10;
var deep = 10;
var price = 2500000;
var volumeInMeters = wide * high * deep;
var  gardenSizeInM2 = 100;
housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

if (price > housePrice) {
    console.log(housePrice + " er mindre end " + price);
} else {
    console.log(housePrice + " er dyrere end " + price);
}

