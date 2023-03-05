// write a test using mocha and chai that need to check if a parameter is an array or not
// if it is an array, return true, else return false
// write the test first, then write the function to make the test pass

// Path: test/test.js

const assert = require("assert");
const myMap = require("../index.js").myMap;

//write a test using mocha and chai that need to check if myMap uses the map method or not
//if it does, return an error message, else return a success message
//write the test first, then write the function to make the test pass

describe("Tests pour MyMap", () => {
  it("Tu ne dois pas utiliser de high order functions", () => {
    assert.equal(
      myMap.toString().includes("map"),
      false,
      "Tu triches! Tu utilises la méthode map!"
    );
    assert.equal(
      myMap.toString().includes("forEach"),
      false,
      "Tu triches! Tu utilises la méthode forEach!"
    );
    assert.equal(
      myMap.toString().includes("reduce"),
      false,
      "Je ne suis pas sur que reduce soit pertinent"
    );
    assert.equal(
      myMap.toString().includes("filter"),
      false,
      "Filter n'est pas pertinent"
    );
  });

  it("Tu dois retourner un array", () => {
    assert.equal(
      Array.isArray(myMap([1, 2, 3], (x) => x + 1)),
      true,
      "Tu dois retourner un array"
    );
  });
  it("L'array retourné doit avoir la même length", () => {
    assert.equal(
      myMap([1, 2, 3], (x) => x + 1)?.length,
      3,
      "Tu dois retourner un array de la même taille"
    );
  });
  it("Tu utilise bien la fonction fn", () => {
    // can't we just check if the function is called?
    assert.equal(
      myMap.toString().includes("fn("),
      true,
      "Tu dois utiliser la fonction fn"
    );
  });
  it("Tu utilise bien une boucle for", () => {
    assert.equal(
      myMap.toString().includes("for"),
      true,
      "Tu dois utiliser une boucle for"
    );
  });
  it("Privilégie l'utilisation de const et let", () => {
    assert.equal(
      myMap.toString().includes("var"),
      false,
      "Recommence en enlevant toutes les var"
    );
  });

  it('"myMap([1, 2, 3], x => x * 2" doit retourner [2, 4, 6]', () => {
    assert.deepEqual(
      myMap([1, 2, 3], (x) => x * 2),
      [2, 4, 6],
      "Le résultat attendu n'est pas le bon"
    );
  });
});
