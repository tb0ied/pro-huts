console.log("One day or Another");

let username = prompt("What is your name");
let num1 = prompt(" Choice a digit");
let mathSym = prompt("Choice  minus - symbol");
let num2 = prompt("choice an even digit number");
console.log(username);

function greet() {
  let time = prompt("What time is it?");
  return document.write("Hello " + username + " it's " + time + " o'clock");
}

//< less than
//we want to say good morning
if (time < 11) {
  message("good morning");
} else if (time <= 17) {
  message("Good afternoon");
} else {
  message("Good evening");
}

function sum(a, b) {
  return a + b;
}

function sum(a, b) {
  document.write(a + b);
}

function takeit(num1, mathSym, num2) {
  document.write(parseInt(num1), mathSym, parseInt(num2));
}
