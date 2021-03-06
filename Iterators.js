// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

// CHALLENGE 1

function sumFunc(arr) {
	var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Uncomment the lines below to test your work
const array = [1, 2, 3, 4];
console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  var index = 0;
  function returnNextValue() {
    var value = arr[index];
    index++;
    return value;
  }
	return returnNextValue;
}

// Uncomment the lines below to test your work
const array2 = ['a', 'b', 'c', 'd'];
const myIterator = returnIterator(array2);
console.log(myIterator()); // -> should log 'a'
console.log(myIterator()); // -> should log 'b'
console.log(myIterator()); // -> should log 'c'
console.log(myIterator()); // -> should log 'd'



// CHALLENGE 2

function nextIterator(arr) {
  var index = 0;
  const iterator = {
    next: function() {
      var value = arr[index];
      index++;
      return value;
    }
  }
	return iterator;
}

// Uncomment the lines below to test your work
const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
console.log(iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()); // -> should log 3



// CHALLENGE 3

function sumArray(arr) {
  var sum = 0;	
  var iterator = nextIterator(arr);
  var next = iterator.next();
  while (next) {
    sum += next;
    next = iterator.next();
  }
  return sum;
}

// Uncomment the lines below to test your work
const array4 = [1, 2, 3, 4];
console.log(sumArray(array4)); // -> should log 10



// CHALLENGE 4

function setIterator(set) {
  var setIterator = set.values();
  var iterator = {
    next: function() {
      var next = setIterator.next();
      return next.value;
    }
  }
  return iterator;
}

// Uncomment the lines below to test your work
const mySet = new Set('hey');
const iterateSet = setIterator(mySet);
console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'



// CHALLENGE 5

function indexIterator(arr) {
  var index = 0;
  var iterator = {
    next: function() {
      var element = [index, arr[index]];
      index++;
      return element;
    }
  }
	return iterator;
}

// Uncomment the lines below to test your work
const array5 = ['a', 'b', 'c', 'd'];
const iteratorWithIndex = indexIterator(array5);
console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
console.log(iteratorWithIndex.next()); // -> should log [2, 'c']



// CHALLENGE 6

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function() {
    let index = 0;
      const splitString = this.str.split(" ");
    return {
      next: function() {
        if (index < splitString.length) {
          const value = splitString[index];
          index++;
          return { value, done: false};
        } else {
          return { done: true };
        }
      }
    }
  }
  
  // Uncomment the lines below to test your work
  const helloWorld = new Words('Hello World');
  for (let word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'
  
  // CHALLENGE 7  

function valueAndPrevIndex(array){
  var index = 0;
  var iterator = {
    sentence: function() {
      if (index === 0) {
        index++;
        return "This is the first element!";
      }
      var newIndex = index - 1;
      var element = "Was found after " + newIndex;
      index++;
      return element;
    }
  }
	return iterator;
}

const returnedSentence = valueAndPrevIndex([4,5,6])
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());


//CHALLENGE 8

function* createConversation(string) {
  yield setInterval(function() {
    if (string == "english") {
      console.log("hello there");
    } else {
      console.log("gibberish");
    }
  }, 3000);
}

console.log(createConversation('english').next());



//CHALLENGE 9
function waitForVerb(noun) {
	return new Promise(resolve => {
    setTimeout(() => resolve(`${noun} barks`), 3000);
  });
}

async function f(noun) {
	const sentence = await waitForVerb(noun);
  console.log(sentence);
}	

f("dog");