const accountId = 204397
let accountEmail= "mkp@gmail.com"
var accountPassword = "5444"
accountCity= "Pali"
let accountState;

// accountId = 2043 // Not allowed

accountEmail = "newmp@google.com"
accountPassword = "1224"
accountCity = "Mumbai"

console.log(accountId);

/*
Dont user Var 
because of issue in block scope and functional scope.
*/

console.table([accountId ,accountEmail, accountPassword, accountCity, accountState])
