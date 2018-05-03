/*
 * Find Number in array of numbers
 */
function findNumber(arr, k) {
  let isIn = 'NO';
  for (let i = 0; i < arr.length; i++) if (arr[i] == k) {
    isIn = 'YES';
  }
  return isIn;
}

/**
 * Avoid Obstacles
 */
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

/*
 * Complete the function below.
 */
function oddNumbers(l, r) {
  let numbers = [];
  for (let i = l; i <= r; i++) if (i % 2 == 1) {
    numbers = [...numbers, i];
  }
  return numbers;
}