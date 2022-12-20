"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let dis = b**2 - 4 * a * c;
  if (dis < 0){
  } else if (dis === 0){
    arr = [-b / (2 * a)];
  } else if (dis > 0){
    arr.push((-b + Math.sqrt(dis) )/(2 * a));
    arr.push((-b - Math.sqrt(dis) )/(2 * a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNan (percent)) {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (isNan (contribution)) {
    return `Параметр "Первоначальный взнос" содержит неправильное значение "${contribution}"`;
  } else if (isNan (amount)) {
    return `Параметр "Сумма кредита" содержит неправильное значение "${amount}"`;
  }
  let creditBody = amount - contribution; //S
  let rate = (percent * 100) / 12; //P
  let totalAmount = creditBody * (rate + (rate/(((1+rate)**date)-1))).toFixed(2); //платеж
  console.log(totalAmount);
  return totalAmount;
}