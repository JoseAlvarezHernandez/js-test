# JavaScript Function that will be useful in an interview


 
 __* Function that return Fibonacci positions__
 
 ```javascript
 function getFibonaccis(nPositions) {
  let result = []
  for (let i = 0; i < nPositions; i++) {
    result = [...result, (result[i - 2] || 0) +  (result[i - 1] || i)]
  }
  return result.join(', ');
}
 ```
 
 
__* Function that return a factorial of a given number__
 
 ```javascript
 function factorial(n){
   let result = n;
   for(let i = 2; i < n; i++ ){
     result *= i;
   };
   return result;
 }
 ```
__or__
 ```javascript
 const factorial = n => Array(n).fill(n).reduce((total, val, index) =>  total * (val - index))
 ```
 
 
__* Find a number in array of numbers__

```javascript
function isIn(arr, n){
	return arr.some(value => value === n)
}
```
__or__
```javascript
const isIn = (arr, n) => arr.some(value => value === n)
```


__* Avoid Obstacles__

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


__* Return odd numbers between a start and end number given__
 
```javascript
function oddNumbers(l, r) {
  let numbers = [];
  for (let i = l; i <= r; i++) if (i % 2 == 1) {
    numbers = [...numbers, i];
  }
  return numbers;
}
```


__* A function that validates IPV4__

```javascript
function isIPv4Address(inputString) {
  let IPv4 = inputString.split('.');
  if(IPv4.length!== 4)
      return false;

  return IPv4.every(x => ( +x >= 0 && +x <= 255 && x !== ''));
}
```


__* Function that given a string can tell if its palindrome__

```javascript
function checkPalindrome(inputString) {
  oldInput = inputString.toLowerCase().replace(/\s/img,'');
  inputString = inputString.toLowerCase().split('').reverse().join('').replace(/\s/img,'');
  return oldInput == inputString;
}
```

__* area of a polygon for a given number__

```javascript
function shapeArea(n) {
    let i = n + (n - 1 );
    return Math.round( (i * i) / 2);
}
```

__* Call a function inner to get the sum of two number__

```javascript
function sum(a){
  return function(b){
    return a + b
  }
}
```
__or__
```javascript
const sum = a => b => a + b
```

__* Plus Minus__

*Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros.*

```javascript
function getResult(arr, compare, divided){
    return (arr.reduce((total, x) => total + (x == compare ? 1: 0), 0) / divided).toFixed(6)
}
function plusMinus(arr) {
   let res = arr.map(x => x == 0 ? null : x > 0 ? true : false)
   return [
        getResult(res, true, arr.length), 
        getResult(res, false, arr.length),
        getResult(res, null, arr.length)
    ]
}
```

__*Staircase__

Complete the staircase function in the editor below. It should print a staircase as described above.

staircase has the following parameter(s):

n: an integer


```javascript
function staircase(n) {
    let hashtag = '#'
    let space = ' '
    let stair = Array(n)
                .fill(n)
                .map((value, key) => `${space.repeat(value - (key + 1))}${hashtag.repeat(key + 1)}`)
                    
    return stair
}

staircase(20).join('/n')
```
