 /*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `celsius`
 * 2. You code should have a variable `fahrenheit`
 * 3. Your variable `celsius` should equal `12`
 * 4. Your variable `fahrenheit` should produce the output equal `53.6`
 * 5. Your variable `fahrenheit` declaration should use the `celsius` variable
 * 6. Your variable `fahrenheit` should have the correct formula
 * 7. Your code should log the `fahrenheit` variable
 * 8. Your code should not be empty
*/
let fahrenheit ;
let celsius = 12;
 /* convert celsius to fahrenheit here */
fahrenheit = celsius * 1.8  + 32;
/*displaying calculated output here*/
console.log( "the output is " + fahrenheit);

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should print a string with your favorite food
 * 2. Your code should have the first character capitalized
 * 3. Your code must have a `console.log()` function
 * 4. Your code should not be empty
 */
let favouriteFood = (" Rice");
console.log ("my favourite food is " + favouriteFood);

/* QUIZ REQUIREMENTS
* 1. Your code should have a variable `answer`
* 2. Your code should have "ALL Strings are CrEaTeD equal" on the left side
* 3. Your code should use `==` comparison operator
* 4. The comparison should evaluate to true
* 5. The right side of your expression should match the left side
*/

const answer = "ALL Strings are CrEaTeD equal" == "All Strings are CrEaTeD equal";
console.log (answer);

/*
 * Programming Quiz: All Tied Up
 
 * Quiz Requirements
 * 1. Your code should have a variable joke
 * 2. Your joke should use only one string
 * 3. Your joke should match the expected format
*/
Why couldn't the shoes go out and play?
They were all "tied" up!
var joke = "Why couldn't the shoes go out and play ? \nThey were all \"tied\" up!"
console.log(joke);


/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `haiku`
 * 2. Your code should use string concatenation
 * 3. Your poem should match the famous haiku poem
 */

let haiku =  "Blowing from the west \nFallen leaves gather \nIn the west"
console.log(haiku);

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have a variable `fullName`
 * 2. Your variable `fullName` should be declared using the `var` keyword
 * 3. Your variable `fullName` should be a non-empty string
 */
var fullName =  "kofoworola stephen";

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables - `bill`, `tip`, and `total`
 * 2. Your variables - `bill`, `tip`, and `total` should be declared using the `var` keyword
 * 3. Your variable `bill` should be a number, having a value equal to the result of `10.25 + 3.99 + 7.15`
 * 4. Your variable `tip` should be a number, having a value equal to 15% of the `bill`
 * 5. Your variabe `total` should be a number, having a value equal to the `bill` and `tip` added together
 * 6. Your code should print the total to the console
 */
var bill;
var tip;
var total;
bill = 10.25 + 3.99 + 7.15;
tip = bill * 0.15;
total = bill + tip;
total = total.toFixed(2);
console.log('the total is $' + total);

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables - `adjective1`, `adjective2`, `adjective3`, and `madLib`.
 *
 * 2. Use the adjective1, adjective2, and adjective3 variables to set the madLib variable to the message:
 * 'The Intro to JavaScript course is amazing. James and Julia are so fun. I cannot wait to work through the rest of this entertaining content!'
 *
 * 3. Your madLib should match the given string
 * 4. The madLib variable should be printed to the console
 */

let adjective1 = "amazing";
let adjective2 = "fun";
let adjective3 = "entertaining";
let matlib
 matlib = " The Intro to JavaScript course is " + adjective1 +",james and jolia \n are so" + adjective2 +."I cannot wait to work through rest of \n this" + adjective3 +"content"

