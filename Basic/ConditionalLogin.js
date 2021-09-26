// Allow user to access course if he is:
// logged in from email
// logged in form Google
// logged in from Facebook

var email = true;
var facebook = false;
var google = false;

if (email || facebook || google) {
    console.log("Login Success");
}