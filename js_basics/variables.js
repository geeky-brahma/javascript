const accountId = 12345
let accountName = "Brahma"
var accountType = "Free"
accountCity = "Bhubaneswar"
let accountState // If no value assigned then it is initialised as undefined 

// accountId = 2  // Variables declared with const keyword cant be changed once a value has been assigned to it.
// console.log(accountId);

accountName = "Nanda"
accountType = "paid"
accountCity = "Puri"

console.table([accountId, accountName, accountType, accountCity, accountState])

/**
 * console.table([list of variables]) give the output in form of a table
 */


/**
    Prefer not to use var keyword as it has some issues with the block scope and functional scope
*/  