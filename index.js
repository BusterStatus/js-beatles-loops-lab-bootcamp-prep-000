// add solution here
function theBeatlesPlay (arrayOfMusicians, arrayOfInstruments) {
    var array = [];
    for (var i = 0; i < arrayOfMusicians.length; i++) {
      array.push(arrayOfMusicians[i] + " plays " + arrayOfInstruments[i]);
    }
    return array;
}

function johnLennonFacts (arrayOfFacts) {
  var array = [];
  while (array.length < arrayOfFacts.length) {
    array.push(arrayOfFacts[i] + "!!!");
    incrementVariable();
  }
  return array;
}

function incrementVariable() {
  i = i + 1;
}

function iLoveTheBeatles (number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array;
}