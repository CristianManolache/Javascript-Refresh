//food prices
var beer_cost = 6.75;
var burger_cost = 5.00;
var pop_cost = 3.00;
var bank_ballance = 100;

//user's cash money
var account_balance = 25.75
//check account balance
function checkBalance(amt) {
    if (account_balance - amt >= 0) {
        return true;
    } else {
        console.log("INSUFFICIENT FUNDS");
        return false;
    }
}

//drink beer function
function drink_beer() {
    if (checkBalance(beer_cost)) {
        account_balance = account_balance - beer_cost
        console.log("Enjoy your beer");
    }
    console.log("You spend " + beer_cost, "at Lazy Bar", ",", "Account balance now is: " + account_balance.toFixed(2));
}

//burger eat function
function eat_burger() {
    if (checkBalance(burger_cost)) {
        account_balance = account_balance - burger_cost;
        console.log("Enjoy your burger");
    }
    console.log("You spend " + burger_cost, "at Lazy Bar", ",", "Account balance now is: " + account_balance.toFixed(2));
}

//pop drink function
function drink_pop() {
    if (checkBalance(pop_cost)) {
        account_balance = account_balance - pop_cost;
        console.log("Enjoy your pop");
    }
    console.log("You spend " + pop_cost, "at Lazy Bar", ",", "Account balance now is: " + account_balance.toFixed(2));
}

//remaining
function acc_balancetodate() {
    console.log("Account balance now is: " + account_balance);
}
//visit the Christmas Market --> eat and drink

var mealList = [eat_burger, drink_beer, drink_pop, drink_beer];

function visitChristmas(mList) {
    //mList is a parameter with no value inside
    for (var i = 0; num = mList.length; i < num, i++) {
        mList[i]();
    }
}
//mList = mealList after we call the function bellow.

visitChristmas([eat_burger, eat_burger, drink_beer]);
visitChristmas([eat_burger, eat_burger, drink_beer, drink_pop]);



