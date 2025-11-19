let userRole = "admin";
let accessLevel;

if (userRole === "admin"){
    accessLevel = "Full access garanted";
} else if (userRole === "manager"){
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Lever: ", accessLevel);

let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcom, Admin";
    } else {
        userMessage = "Welcome, user";
    }
} else {
    userMessage = "please log in to access";
}

console.log("user message: ", userMessage);

let userType = "subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unkown";
}

console.log("user category: ", userCategory);