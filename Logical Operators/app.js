//Binary Logical Operators
// AND &&
// OR ||
// creating compiund if statements

let ingriedients = ['bun', 'lettuce', 'cheddar', 'ham'];

let sandwichHas = function (ingridient) {
    for (let i of ingriedients) {
        if (i == ingridient) {
            return true;
        }
    }
    return false;
    //of this line omitted it returns undefined
    //which is also a falsey value
}

if (sandwichHas('mortazza') || (sandwichHas('speck')) || (sandwichHas('ham'))) {
    console.log("Sandwich has meat");
} else {
    console.log("No meat")
}

if ((sandwichHas('bun')) && (sandwichHas('lettuce')) && (sandwichHas('cheddar')) && (sandwichHas('ham'))) {
    console.log("It's a full ham sandwich");
} else {
    console.log("No it's not a ham sandwich")
}