//Objects

var dog = {
    "name": 'Woody',
    "type": 'dog'
};
var cat = {
    "name": 'Tom',
    "type": 'Cat'
};
var wolf = {
    "name": 'Johnny',
    "type": 'Wolf'
};


console.log(dog);
console.log(cat);

var petNames = ['Woody', 'Tom'];

var pets = [dog, cat];
console.log(pets);

pets.push(wolf);
console.log(pets);

pets[0].age = 15;
pets[0].hungry = true;
pets[1].age = 4;
pets[1].hungry = false;
pets[2]["age"] = 9;
pets[2].hungry = null;

console.log(pets);
