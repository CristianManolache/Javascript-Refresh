//food prices
var beer_cost = 6.75;
var burger_cost = 5.00;
var pop_cost = 3.00;

//user's money
var account_balance = 15.75

//drink beer function
function drink_beer() {
    account_balance = account_balance - beer_cost;
    console.log("You spend " + beer_cost, "at Lazy Bar", ",", "Account balance now is: " + account_balance);
}

//burger eat function
function eat_burger() {
    account_balance = account_balance - burger_cost;
    console.log("You spend " + burger_cost, "at Lazy Bar", ",", "Account balance now is: " + account_balance);
}

//pop drink function
function drink_pop() {
    account_balance = account_balance - pop_cost;
    console.log("You spend " + pop_cost, "at Lazy Bar", ",", "Account balance now is: " + account_balance);
}

//remaining
function acc_balancetodate() {
    console.log("Account balance now is: " + account_balance);
}

acc_balancetodate();
drink_beer();
eat_burger();
acc_balancetodate();