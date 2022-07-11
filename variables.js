var fruit = "apple";
var veggies = "brussel sprouts";
var age = 28;
var year = 2022;
var enrolled = true;
var depositPaid = true;

//The sentence will print "My favorite vegetable is brussel sprouts";

var sentence = `My favorite vegetable is ${veggies}`;
console.log (sentence);

// With the reassigned values, console log should now print "kale" and "pineapple"
var veggies = "kale";
var fruit = "pineapple";
console.log(fruit);
console.log(veggies);

// This is what the string interpolation prints after changing the value of "veggies"
var sentence = `My favorite vegetable is ${veggies}`;
console.log (sentence);