//Arrays is a numbered list of items
//index start in array from 0
var characters = ['Cristian', 'Luke', 'Han', 'Chewie'];

console.log("The names in the list are:", characters);
console.log("We have a total of", characters.length, "guests tonight!");
console.log("The V.I.P tonight is", characters[0]);
console.log("The last guest of our bookings is", characters[characters.length - 1]);

characters.push('George');
characters.push('Sharon');
console.log("Ups... another two guest has joined us please welcome to ", characters[characters.length - 2], " and", characters[characters.length - 1]);
console.log("If ", characters[characters.length - 6], " left, can you tell me the guest who are inside now ?", characters.shift(), " The guest are : ", characters);

var guest_Removed = characters.shift();