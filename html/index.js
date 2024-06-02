// DRY (donot repeat yourself)

//SOC (separation of concern)

// Function syntax

// ES5
// Function define
function multiply(a,b){
  const result = a*b;
  return result;
}

// ES6
const multiply = (a,b)=> {
  return a*b;
}

// further Short cut
const multiply = (a,b)=> a*b;

// function call / execute
const res = multiply(3,2);
console.log(res);

// Write a js function that convert full name to proper case
// eg. ajit kumar chaudhary => Ajit Kumar Chaudhary
const properName = (name) => {
  return name
  .split("") // ["ajit", "kumar", "chaudhar"]
  .map( // for loop
    (word)=>
      word.slice(0,1).toUpperCase() // A
    +
    word.slice(1, word.length).toLowerCase() // jit
  ) // ["Ajit", "Kumar", "Chaudhary"]
  .join(""); // "Ajit Kumar Chaudhary"
};

console.log(properName("ajit kumar chaudhary"));

/* Write a js function to check if the phone number is nepal mobile number
const nepalNumber = (number) => {
  if (number.length === 10) {
    return number.slice(0,2) === "98" || "97"
    ? console.log("nepal number")
    : console.log("not a nepal number");
  } else {
    console.log("not valid number");
  }
  return number;
};

nepalNumber("9807172469");
*/

// optimized code
const nepalNumber = (number) =>
  number.length === 10 && number.match(/9[8|7]/gi) ? true :false;
console.log(nepalNumber("9807172469"));

// Default function
// Parameterized fn
// Explicit fn
// Implicit fn
//IIFE
// Anoonymous fn
// Callback fn
// Closure
//Inline fn
// Pure fn

// Callback fn
//Function where i can pass default value of a parameter
const helloPerson = (greet = "welcome", name = "user") => {
  console.log(greet, name);
};

helloPerson("good morning");

// Pagination ma default fn use garne


//parameterized fn
const getNumFormatter = ({a =1, b=2, c=3}) => {
  return a*b*c;
};

console.log(getNumFormatter({}));

/* Explicit fn
const pagination ({page =1, search ="", role ="", limit=5}) => {};
pagination()

const sayHello = (name) => {
  return `Hi${name}`;
  // "Hi".concat(name)
};

console.log(sayHello("ajit"));
*/
// Implicit fn
const sayHello = (name)=> `Hi${namae}`;
// "Hi".concat(name)

console.log(sayHello("ajit"));

// IIFEs (Immediately Invoked function expressions)
(()=>{}) (); // lekhane tarika

(()=>{
console.log("Brooooo");
}) ();
// IIFEs is used in 
// Project setup js
// Devops (script immediately run)

// Anonymous fn (name bina ko fn)
const fn = function (val) {
  console.log(val);
};

fn("123");

//Call Back Fn
// fn declare (define)
const print = (data)=> {
  console.log(data);
};

const getData = (a,b,cb)=>{
  const disc = (b/100)*a;
  cb(disc);
};

getData(1000,2,print);

//closure fn (used in env variable)
const getPassword = ()=>{
  const pw ="sssss" || "abc";
  return {pw};
};

console.log(getPassword());

// Inline Fn
// Anonymous fn => Fn name assign
const fsn = function test () {};

// Pure fn (utility fn)

// function whose result doesnot change
// date converter
// string formatter
// number formatter
// slug generator
const slug = (text)=>{
  return ''
};

slug("The Cattle for the cry of $$$")





