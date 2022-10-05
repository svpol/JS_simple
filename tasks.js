// Calculate the factorial for a given number a.
function calcFactorial(a) {
  let x = 1;
  for (i = 1; i <= a; i += 1) {
    x *= i;
  }
  return x;
}


// Calculate the sum of all even integers from 1 to a given number a includingly.
function sumEven(a) {
  let x = 0;
  let s = 0;
  while (x <= a) {
    if (x % 2 === 0) {
      s += x;
    }
    x++;
  }
  return s;
}


// Calculate the sum of all integers from 1 to n.
function calcSum(n) {
  let x = 1;
  let s = 0;
  while (x <= n) {
    s += x;
    x++;
  }
  return s;
}


// Two integers are given: k and n. Return a string which consists of n symbols printed k times and delimited with a whitespace. k >= 1 and n >= 1.
// E.g. if k = 3 and n = 1, the function should return "1 1 1".
function strNums(k, n) {
  let numStr = '';
  let x = 1
  while (x <= k) {
    numStr += n.toString() + ' ';
    x++;
  }
  return numStr.trim();
}
