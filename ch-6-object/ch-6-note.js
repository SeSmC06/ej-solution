// Call, Apply in practice
function speak(line) {
  console.log("The "+this.type+" rabbit says '"+line+"'");
}
let whiteRabbit = {type: 'white', speak: speak};
whiteRabbit.speak("oh my ears and whiskers, " + "how late it's getting!");

let fatRabbit = {type: 'fat', speak: speak};
// this.type in fatrabbit context is fatrabbit.type
fatRabbit.speak('Im late for dinner');

speak.call(whiteRabbit, 'hello');     // call, 2nd arg is single elment, seprated by ,
speak.apply(fatRabbit, ['oh noes']);  // apply, 2nd arg is an array of arguments

speak.call({type: 'Durpy Durpy'}, 'Im a durp durp') // three different context in the first argument

// Prototypes
var empty = {};
// toString method goes up to the Object prototype chain if empty doesn't have such method
// prototype object to use as a fallback source of properties
// built-into Object
console.log(empty.toString);

// use Object.create to create object with specific prototype
// protorabbit act as a container for the properties that are shared by all rabbit
// every individual created by Object.create(protoRabbit) will have it's properties
// JS inheritance
let protoRabbit = {
  speak: function(line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
  }
}
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'killer';
killerRabbit.speak('Aayayaya')

// overriding derived properties
Array.prototype.toString.call([1, 2]); // 1, 2
Object.prototype.toString.call([1, 2]);// [object Array]

// although Array is inheriting Object's toString, but itself overrode the funcionality

// Prototype Interference
// prototype can be used any time to add new Properties + Methods to all object based on it
// JS distinguish between Enumerable and Non-Enumerable
// those two will have different methods even though both are Object.created