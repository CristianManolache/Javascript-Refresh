//Javascript for in loops

var monsters = {
    "Canada": 'Sasquatch',
    "Nepal": 'Yeeti',
    "Scotland": 'Loch Ness Monster',
    "Romania": 'Vampire'
};

console.log(monsters);

// var in object
for (let prop in monsters) {
    console.log(prop);
    console.log(monsters[prop]);
}