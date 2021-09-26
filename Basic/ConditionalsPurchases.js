// User is only allowed to make a purchase when he is
// logged in
// email verified
// cardInfo - valid
// If any one is missing, stop purchase

var isLoggedIn = true;
var isEmailVarified = false;
var cardInfo = true;

// if (isLoggedIn){
//     console.log("Logged IN Success");
//     if (isEmailVarified) {
//         console.log("Email is verified");
//         if (cardInfo) {
//             console.log("You can make a purchase");
//         }
//     }
// }

if (isLoggedIn && isEmailVarified && cardInfo) {
    console.log("Allow user to make a purchase");
} else {
    console.log("You are NOT allowed to do that");
}