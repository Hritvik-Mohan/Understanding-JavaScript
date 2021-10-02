// function multiply(arr, n) {
//     var product = 1;
//     for (var i = 0;i < n; i++){
//         product *=  arr[i];
//     }
//     return product;
// }

// var subset = [2, 2, 2, 2, 2];

// console.log(multiply(subset, 5));

function multiply(arr, n){
    if(n <= 0) {
        return 1;
    } else {
        return multiply(arr, n - 1) * arr[n - 1];
    }
}

var subset = [2, 2, 2, 2, 2];

console.log(multiply(subset, 5));