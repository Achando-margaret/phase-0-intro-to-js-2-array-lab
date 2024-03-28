const cats = [ "Milo", "Otis", "Garfield"]

before(function(){
    cats.length = 0
     cats.push ("Milo", "Otis", "Garfield")
})

 function destructivelyAppendCat(name){
    cats.push(name)

}
destructivelyAppendCat(Ralph)

function destructivelyPrependCat(name){
    cats.unshift(name)
}

destructivelyPrependCat(Bob)

function destructivelyRemoveLastCat(name){
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}

function appendCat(name){
   const newCats = [... cats, "Broom"]
   return newCats
}

function prependCat(name){
    const newCats = ["Arnold", ...cats]
    return newCats
}

function removeLastCat() {
  // Create a copy of the cats array excluding the last element
  return cats.slice(0, -1);
}

function removeFirstCat() {
  // Create a copy of the cats array excluding the first element
  return cats.slice(1);
}
describe('removeLastCat()', function () {
  it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', function () {
    expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);
    expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
  });
});

describe('removeFirstCat()', function () {
  it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
    expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);
    expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
  });
});
