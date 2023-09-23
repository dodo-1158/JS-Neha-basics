const accountID= 144553
let accountEmail="dodo@gmail.com"
var accountPassword= "12345"

accountCity= "Jaipur"
let accountState;

// accountID=2 Not allowed because we can't change it as it is assigned as CONST in the beginning

/* Prefer not to use var because of issue in block scope and functional scope
*/

accountEmail="umlauts&digger@gmail.com"
accountPassword="98765"
accountCity="Mumbai"

console.log(accountID);
console.table([ accountID, accountEmail, accountCity, accountPassword, accountState])