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



//It's pretty straightforward. 
//Your goal is to create a function that removes 
//the first and last characters of a string. 
//You're given one parameter, the original string. 
//You don't have to worry with strings with less than two characters.

function removeChar(str) {
  //You got this!
  for (let i = 0; i < str.length; i++) {  
    return str.slice(1, str.length -1)    
  }
}

console.log(removeChar("eloquent"));


/* Write a function that will check if two given characters are the same case.
•	If either of the characters is not a letter, return -1
•	If both characters are the same case, return 1
•	If both characters are letters, but not the same case, return 0
Examples
'a' and 'g' returns 1
'A' and 'C' returns 1
'b' and 'G' returns 0
'B' and 'g' returns 0
'0' and '?' returns -1 */

function sameCase(a, b) {
  if (
    a.length !== 1 ||
    b.length !== 1 ||
    !a.match(/[a-z]/i) ||
    !b.match(/[a-z]/i)
  ) {
    return -1;
  } else if (
    (a.match(/[A-Z]/) && b.match(/[A-Z]/)) ||
    (a.match(/[a-z]/) && b.match(/[a-z]/))
  ) {
    return 1;
  } else {
    return 0;
  }
}
// console.log(sameCase("A", "K"));
// console.log(sameCase("d", "A"));
console.log(sameCase('A', '2'));
