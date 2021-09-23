//Create an Array
let fruits = ['Apple', 'Banana']
console.log(fruits.length)

//Access an Array item using the index position
let first = fruits[0];
let last = fruits[fruits.length - 1]

//Loop over an Array
fruits.forEach(function(item, index, array) {
    console.log(item, index)
})

//Add an item to the end of an Array
let newLength = fruits.push('Orange')

//Remove an item from the end of an Array
last = fruits.pop() 

//Remove an item from the beginning  of an Array
first = fruits.shift()

//Add an item to the beginning of an Array
newLength = fruits.unshift('Strawberry')

//Find the index of an item in the Array
fruits.push('Mango')
let pos = fruits.indexOf('Banana')
console.log(pos)

//Remove an item by index position
let removeItem = fruits.splice(pos, 1)

//Copy an Array
let shallowCopy = fruits.slice()
console.log(shallowCopy)



console.log(fruits)