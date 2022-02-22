//Is n divisible by x and y?
function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0 ) {
      return true 
    } else {
      return false;
    }
  }
  console.log(isDivisible(48, 3, 4))



  //Find the remainder
//Very tricky remainder for me
function remainder(n, m) {
  //Divide the larger argument by the smaller argument and return the remainder
  if ((n === 0 && m < 0) || (m === 0 && n < 0) || (n < 0 && m < 0 && m === n)) {
    return 0;
  } else if (m === 0 || n === 0) {
    return NaN;
  } else if (n > m) {
    return n % m;
  } else if (m > n) {
    return m % n;
  } else if (n < 0 && n < 0 && m > n) {
    return m;
  } else if (n < 0 && n < 0 && n > m) {
    return n;
  }
}


//Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

function sumStr(a,b) {
  let sum = Number(a) + Number(b)
    return String(sum)
}

console.log(sumStr("-5", "3"))
console.log(typeof(sumStr()))


//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
//If it is a square, return its area. If it is a rectangle, return its perimeter.


const areaOrPerimeter = function(l , w) {
  // Return your answer
if (l !== w) {
  return (l + w) * 2
} else {
  return l * w
}
}
console.log(areaOrPerimeter(7, 5))


//Sentence Smash

//Write a function that takes an array of words and smashes them together
 //into a sentence and returns the sentence. You can ignore any need to 
 //sanitize words or add punctuation, but you should add spaces between 
 //each word. Be careful, there shouldn't be a space 
 //at the beginning or the end of the sentence!

 function smash(words) {
  return words.join(" ")
}

console.log(smash(['hello', 'world', 'this', 'is', 'great']))