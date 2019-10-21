# JavaScript Function that will be useful in an interview
 
 * Function that return Fibonacci positions
 
 ```javascript
 function getFibonaccis(nPositions) {
  let result = []
  for (let i = 0; i < nPositions; i++) {
    result = [...result, (result[i - 2] || 0) +  (result[i - 1] || i)]
  }
  return result.join(', ');
}
 ```
 
 * Function that return a factorial of a given number
 
 ```javascript
 function factorial(n){
   let result = n;
   for(let i = 2; i < n; i++ ){
     result *= i;
   };
   return result;
 }
 ```
 or
 ```javascript
 const factorial = n => Array(n).fill(n).reduce((total, val, index) =>  total * (val - index))
 ```
 
 * Find a number in array of numbers

```javascript
function isIn(arr, n){
	return arr.some(value => value === n)
}
```
or 
```javascript
const isIn = (arr, n) => arr.some(value => value === n)
```

 * Avoid Obstacles 

```javascript
function avoidObstacles(inputArray) {
  const max = Math.max(...inputArray) + 1;
  const newArr = [];
  
  for (let i = 0; i < max; i++) {
    newArr.push(inputArray.some(x => x == i) ? i : null);
  }
  return loopThrough(newArr, 1);
}

function loopThrough(newArr, steps) {
  for (j = 0; j < newArr.length; j += steps) {
    if (newArr[j] != null) {
      steps = loopThrough(newArr, (steps + 1));
    } else if (newArr[j] === undefined) {
      break;
    } else {
      continue;
    }
  }
  return steps;
}
```

 * Return odd numbers between a start and end number given
 
```javascript
function oddNumbers(l, r) {
  let numbers = [];
  for (let i = l; i <= r; i++) if (i % 2 == 1) {
    numbers = [...numbers, i];
  }
  return numbers;
}
```


* A function that validates IPV4 

```javascript
function isIPv4Address(inputString) {
  let IPv4 = inputString.split('.');
  if(IPv4.length!== 4)
      return false;

  return IPv4.every(x => ( +x >= 0 && +x <= 255 && x !== ''));
}
```

* Function that given a string can tell if its palindrome

```javascript
function checkPalindrome(inputString) {
  oldInput = inputString.toLowerCase().replace(/\s/img,'');
  inputString = inputString.toLowerCase().split('').reverse().join('').replace(/\s/img,'');
  return oldInput == inputString;
}
```

* area of a polygon for a given number

```javascript
function shapeArea(n) {
    let i = n + (n - 1 );
    return Math.round( (i * i) / 2);
}
```

* Call a function inner to get the sum of two number

```javascript
function sum(a){
  return function(b){
    return a + b
  }
}
```
or 
```javascript
const sum = a => b => a + b
```

* Plus Minus
*Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros.*

```javascript
function plusMinus(arr){
    let res = arr.map(x => x == 0 ? null : x > 0 ? true : false)
    return [
        getResult(res, true, arr.length), 
        getResult(res, false, arr.length),
        getResult(res, null, arr.length)
    ]
}
​
function getResult(arr, compare, divided){
    return (arr.reduce((total, x) => total + (x == compare ? 1: 0)) / divided).toFixed(6)
}
```