// cats is assigned an initial value of ["Milo", "Otis", "Garfield"]
const cats = ["Milo", "Otis", "Garfield"];

// destructivelyAppendCat(name) appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
  cats.push(name);
}

// destructivelyPrependCat(name) prepends a cat to the beginning of the cats array
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// destructivelyRemoveLastCat() removes the last cat from the cats array
function destructivelyRemoveLastCat() {
  cats.pop();
}

// destructivelyRemoveFirstCat() removes the first cat from the cats array
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// appendCat(name) appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name) {
  return [...cats, name];
}

// prependCat(name) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name) {
  return [name, ...cats];
}

// removeLastCat() removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat() {
  return cats.slice(0, -1);
}

// removeFirstCat() removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
function removeFirstCat() {
  return cats.slice(1);
}
