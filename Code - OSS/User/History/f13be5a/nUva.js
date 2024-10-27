


function Animal() {}
Animal.prototype.sound = "bark"

const dog = new Animal();
dog.sound = "ham"
const corso = Object.create(dog);
console.log(dog.sound);
console.log(corso.sound);
corso.sound = "mrrr";
console.log();

