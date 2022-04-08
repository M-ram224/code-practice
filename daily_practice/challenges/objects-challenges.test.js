// *****consider each variable, and write a test for each*****
// 1. Consider this variable:
const person = {
  firstName: "Arthur",
  lastName: "Dent",
  // Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
  homePlanet: "Earth",
  // Update the person object with a method that logs "Arthur Dent is from planet Earth".
  getData: function() {
    return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
  }
}

describe("person", () =>{
  test('firstName is Arthur', ()=>{
    expect(person.firstName).toEqual('Arthur');
  });
  test('lastName is Dent', ()=>{
    expect(person.lastName).toEqual('Dent');
  });
  test('firstName is Arthur', ()=>{
    expect(person.homePlanet).toEqual('Earth');
  });

  describe('getData', () => {
    test('includes the first name', ()=>{
      expect(person.getData()).toContain('Arthur')
    })
    test('includes the last name', ()=>{
      expect(person.getData()).toContain('Dent')
    })
    test('includes the planet', ()=>{
      expect(person.getData()).toContain('Earth')
    })
    test('result string format', () => {
      expect(person.getData()).toEqual('Arthur Dent is from planet Earth');
    });
  });
})

//  2. Consider this variable:
var product = {
  name: "chair", 
  price: 14.99,
}

// Write a function called describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".
function describeProduct(product) {
  return `The product is a ${product.name}. It costs \$${product.price}`;
}

describe('describeProduct', () => {
  test('produces description with name and value', ()=>{
    const result = describeProduct(product);
    expect(result).toEqual('The product is a chair. It costs $14.99');
  })
});


// 3. Consider this variable:
const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"],
  // Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
  howToMake: 
    function() {
        return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients[0]}, ${lunch.ingredients[1]} and ${lunch.ingredients[2]}`
      }
}

// Write the code that accesses the ingredients property.
// console.log(lunch.ingredients)

// Write the code that access the 3rd ingredient of the lunch object.
// console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
function lunchTime(lunch){
  return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients[0]}, ${lunch.ingredients[1]} and ${lunch.ingredients[2]}`
}

describe('lunchTime', () =>{
  test("returns the ingredients of a pb and banana sandwich from objects given", ()=>{
    const result = lunchTime(lunch)
    expect(result).toEqual('The ingredients for a PB and Banana sandwich are bread, peanut butter and banana')
  })
})

describe('lunch', () =>{
  test("returns the ingredients of a pb and banana sandwich from objects given as a method in the object", ()=>{
    expect(lunch.howToMake()).toEqual('The ingredients for a PB and Banana sandwich are bread, peanut butter and banana')
  })
})


// 4. Consider this variable:
var animals = [
  { name: "Waffles", type: "dog", age: 12 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 },
]

// Create a test and function that takes in any array of objects and returns a new array with only those of type cat.
describe('catTypes', () =>{
  test("returns an array with only cats in an object of animals", () =>{
    expect(catTypes(animals)).toEqual(
      [{"age": 14, "name": "Fluffy", "type": "cat"}, {"age": 11, "name": "Hank", "type": "cat"}])
  })
})

function catTypes(animals) {
  return animals.filter( val => val.type === "cat")
}

// Using the same array of objects above. Create a test and function that returns a new array with only the names of the animals.
describe('namesOnly', ()=>{
  test('returns an array with the names of the animals only', () => {
    expect(namesOnly(animals)).toEqual(
      ["Waffles", "Fluffy", "Spelunky", "Hank"]
    )
  })
})
function namesOnly(animals){
  return animals.map((key, value) => key.name)
}


// 5. Consider this variable:
let author = {
    name: "H. G. Wells",
    genre: "science fiction"
}

// Write the code that destructures the author object and makes the following work:
let { name, genre } = author
// console.log(`${name} is a ${genre} author`)
// --> "H. G. Wells is a science fiction author"


// 6. Consider this variable:
describe('describePokemon1', () =>{
  test('destructures object pokeOne to return a description of the pokemon', () =>{
    expect(describePokemon1(pokeOne)).toEqual('Charmandar is a Fire pokemon')
  })
})
describe('describePokemon2', () =>{
  test('destructures object pokeTwo to return a description of the pokemon', () =>{
    expect(describePokemon2(pokeTwo)).toEqual('Magikarp is a Water pokemon')
  })
})
let pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire"
}

let pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
}
// Write a function called describePokemon() that take an object like the ones above and uses destructuring to return a description of the Pokemon such that:

function describePokemon1(pokeOne){
  const { species, pokemon_type } = pokeOne
  return `${pokeOne.species} is a ${pokeOne.pokemon_type} pokemon`
}
function describePokemon2(pokeTwo){
  const { species, pokemon_type } = pokeTwo
  return `${pokeTwo.species} is a ${pokeTwo.pokemon_type} pokemon`
}
// console.log(describePokemon(pokeOne))
// --> "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// --> "Magikarp is a Water pokemon"