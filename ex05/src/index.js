// Only change code below this line
var myPetsArray = [
    {
        animalType: "Dog",
        name: "Pujdo"
    },
    {
        animalType: "Cat",
        name: "Maca"
    },
    {
        animalType: "Bird",
        name: "Tweety"
    }
];
function myPetsFunction(pets) {
    var secondPet = {
        animalType: pets[1].animalType,
        name: pets[1].name
    };
    return secondPet;
}
// Only change code above this line
console.log(myPetsFunction(myPetsArray)); // Change this line
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;
