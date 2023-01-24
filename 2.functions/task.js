function getArrayParams(...arr) {
  let min = -Infinity;
  let max = Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i]
  }
  avg = (sum / arr.length).toFixed(2);

  return { min:  Math.min(...arr), max: Math.max(...arr), avg: avg };
}

let arrOfArr=[[1, 2, 3, 4], [10, 20, -10, -20]];
function worker(arr) {
   for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
 function makeWork(arrOfArr, worker) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let totalSum = worker (arrOfArr[i]);
    if (totalSum > max){
      max = totalSum;
    }
  }
  return max;
  function worker2(arr) {
    let min = Math.min(arr[i]);
    let max = Math.max(arr[i]);
    let difference = Math.abs(min-max);
   }
   return makeWork();
 }

/*
function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
*/