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