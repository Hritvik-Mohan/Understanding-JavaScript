/*
Define a function that can answer the role of a user,
A user can be on following roles:
admin - with all access
subadmin - with access to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user.

Input: getUserRole(name, role)
*/


var getUserRole = function (name, role)  {
// function getUserRole(name, role){
// var getUserRole = (name, role) => {

    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break; // this is not necessary;
        case "subadmin":
            return `${name} is sub-admin with access to create and delete course tests`
            break; // this is not necessary;
        case "testprep":
            return `${name} is a testprep with access to create and delete testpreps`
            break; // this is not necessary;
    
        default:
            return `${name} is a trial user`;
            break; 
            // this is not necessary.
            // Once the value is returned, 
            // the rest of the code never actually executes
    }
}

console.log(getUserRole("hritvik", "testprep"));

var getRole = getUserRole("samay", "user");

console.log(getRole);