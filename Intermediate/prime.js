// Input a number and print whether it is prime or not.
// Language: javascript
// Path: Intermediate/prime.js

const num = 5;

let isPrime = true;

for(let i = 2; i < num; i++) {
    if(num % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log(`${num} is a prime number`)
} else {
    console.log(`${num} is not a prime number`)
}