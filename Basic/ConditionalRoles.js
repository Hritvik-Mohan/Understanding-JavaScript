// Create an application with following  roles:
// admin - gets full access
// subdomain - gets access to create/delete courses
// user - get access to consume content

var user = "testprep";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete courses");
        break;
    case "testprep":
        console.log("gets access to create/delete tests");
        break;
    case "user":
        console.log("get access to consume content");
        break;

    default:
        console.log("Trial user");

        break;
}