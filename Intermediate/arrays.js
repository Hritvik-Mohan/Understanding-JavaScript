var countries = ["India","USA","Japan","Russia"];

var states = new Array("Uttar Pradesh", "Delhi", "Mumbai","Assam");

// console.log(states[1]);

// console.log(states.length);
states[0] = "Punjab";
// console.log(states);

var user = ["hritvik", "hritvik5005@gmail.com", 3, 34, true];
// console.log(user);

user.pop();
user.pop();
// console.log(user);
user.unshift("NEW VALUE");
// console.log(user);
user.shift();
console.log(user);

console.log(user.indexOf("hritvik"));

console.log(Array.from("hritvik")); 