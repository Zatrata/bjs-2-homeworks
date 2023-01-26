function getArrayParams(...arr) {
  let avg = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  avg = (sum / arr.length).toFixed(2);
  return { min:  Math.min(...arr), max: Math.max(...arr), avg: avg };
}

function worker(arr) {
  let sum = 0;
   for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
 function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let totalSum = func (arrOfArr[i]);
    if (totalSum > max){
      max = totalSum;
    }
  }
  return max;
 }

 function worker2(arr) {
  let min = Infinity;
  let max = -Infinity;
  let difference = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  difference = Math.abs (min-max);
  return difference;
 }