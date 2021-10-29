/* QUIZ REQUIREMENTS
* 1. Your code should have a variable `number`, and include an `if...else` statement
* 2. Your conditional should use a strict comparison (`===` or `!==`), and use the modulo ( `%` ) operator
* 3. Your code should produce the expected output - "even" or "odd" using console.log() method
*/
let number = 4;
if( number % 2 === 0  ){
console.log("the number is an even number")
}else{
console.log("the number is an odd number")
}

 
* QUIZ REQUIREMENTS
* 1. Your code should have a variable `musicians`, and include `if...else if...else` conditional statement
* 2. Your code should produce the expected output, as mentioned above. Read each condition carefully. 
*/

let musicians = 1;
if (musicians <= 0){
    console,log("not a group");
}
else if( musicians===1 ){
    console.log("solo");
}
else if(musicians === 2){
    console.log("duet");
}
else if(musicians ===3){
    console.log("trio")
}
else if(musicians === 4){
    console.log("quartet")
}
else if(musicians > 4){
    console.log("this is a large group")
}

 * QUIZ REQUIREMENTS
 * 1. Your code should have a variables - `room`, `suspect`, `weapon`, and `solved`
 * 2. Your code should include a conditional statement
 * 3. The variable `suspect` should use one of the provided values
 * 4. The variable `weapon` should be based on the `room`
 * 5. Your code should produce the expected output: __________ did it in the __________ with the __________!
 * Example: Mr. Parkes did it in the dining room with the knife!
 *
 * 6. For unmatching combination of the suspect and the room, print nothing on the console
 */
 
/* ****************************************** */
/* TESTING LOGIC */ 
// Change the value of `room` and `suspect` to test your code
 
// A room can be either of - dining room, gallery, ballroom, or billiards room
var room = "billiards room";
 
// A suspect can be either of - Mr. Parkes, Ms. Van Cleve, Mrs. Sparr, or Mr. Kalehoff
// Test your code by giving matching as well as unmatching names of the suspect
var suspect = "Mr. Parkes"; 
 
/* ****************************************** */
 
/* IMPLEMENTATION LOGIC*/
 
// Initial values
var weapon = "";
var solved = false;
 
/*
* To help solve this mystery, write a combination of conditional statements that:
* 1. sets the value of weapon based on the room and
* 2. sets the value of solved to true if the value of room matches the suspect's room
*/
if (/* your conditional goes here */) {
    
} else if (/* your conditional goes here */) {
    
} else if (/* your conditional goes here */) {
    
} else {
    
}
/* ****************************************** */
// The code below will run only when `solved` is true
if (solved) {
	console.log(/* your message goes here*/);
}
/* ****************************************** */
var room="billard room";
var suspect ="Mrs.Sparr";
var weapon = "";
var solved = false;

if (room === "billard room" && suspect === "Mrs.Sparr"){
    weapon = "pool stick";
    solved = "true";
}else if(room === "gallery" && suspect === "Ms.. Van Cleve"){
    weapon = "trophy";
    solved = "true";
}else if(room === "dinning room" && suspect === "Mr.Parkes"){
    weapon = "knife";
    solved = "true";
}else if(room === "ballroom" && suspect ==="Mr.Kalehoff"){
    weapon = "poison";
    solved = "true";
}
if(solved = true) {
    console.log (suspect + "did it in the" + room "with the" + weapon)
}



/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 

*/
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
let balance = 325.00;
let checkBalance = true;
let isActive = false;
// your code goes here


let balance = 325.00;
let checkBalance = true;
let isActive = false;

if ( !checkBalance){
    console.log("Thank you.Have a nice day !")
}else{
    if (isActive && balance > 0){
        console.log ("your balance is $" + balance.toFixed(2)  + ".")
    }
    else if (!isActive){
        console.log("your account is no longer active.")
    }
    else if ( balance = 0){
        console.log("your account is empty");
    }else if (balance != 0 ){
         console.log ("Your balance is negative.Please contact your bank.")
    }
    }


   
    
   /*
    * QUIZ REQUIREMENTS
    * 1. Your code should have the variables `flavor`, `vessel`, and `toppings`
    * 2. Your code should have an `if` statement
    * 3. Your code should use logical expressions
    * 4. Your code should work with 
    *  - `flavor=vanilla`, `vessel=cone`, and `toppings=sprinkles`
    *  - `flavor=vanilla`, `vessel=cone`, and `toppings=peanuts`
    *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=sprinkles`
    *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=peanuts`
    * 
    *  - `flavor=chocolate`, `vessel=cone`, and `toppings=sprinkles`
    *  - `flavor=chocolate`, `vessel=cone`, and `toppings=peanuts`
    *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=sprinkles`
    *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=peanuts`
    *   
    * 5. Your code should NOT log (print) anything when 
    *  - the flavor is something other than "vanilla" or "chocolate"
    *  - the vessel is something other than "cone" or "bowl"
    *  - the toppings is something other than "sprinkles" or "peanuts"
    * 
    * 6. Your code should not be empty
    */
    
   // change the values of `flavor`, `vessel`, and `toppings` to test your code
   var flavor = "vanilla";
   var vessel = "cone";
   var toppings = "sprinkles"
   if (flavor === "vanilla" && vessel ===  "cone" && toppings === "sprinkles"){
       console.log("I\'d like two scoops of"+ vanilla + "ice cream in a" + vessel +"with" + toppings);
   }
   
/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement. 
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;
 
/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */



var eatsPlants = false;
var eatsAnimals = true;

var category  = (eatsPlants && eatsAnimals) ? "omnivore" : (!eatsPlants && eatsAnimals) ? 
"carnivore" : (eatsPlants && !eatsAnimals) ? "herbivore":undefined;

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// change the value of `education` to test your code
var education = 'no high school diploma';
 
// set the value of this based on a person's education

 
// your code goes here

var education = 'no high school diploma';
let salary = 0;
switch(education){
    case:
}