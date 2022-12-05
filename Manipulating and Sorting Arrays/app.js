/** 
0 - Luke
1 - Leia
2 - Han
3 - Chewie 
*/

var character = ['Luke', 'Leia', 'Han', 'Chewie', 'Chewie'];
console.log(character);

/** 
character.splice(0, 1, 'Cristian');
console.log(character);

character.splice(1, 2, 'Kylo');
console.log(character);

character.splice(1, 2, 'Ciao', 'Bambina');
console.log(character);

character.splice(1, 2);
console.log(character);

character.push('Lorenzo', 'Lamas');
console.log(character);

character.sort(); //alphabetical order
console.log(character);

//character.reverse(); //reverse order
*/

var position = character.indexOf('Chewie');
console.log("The position of Chewie is on:", position);
position = character.lastIndexOf('Chewie');
console.log("Last position of Chewie is on:", position);