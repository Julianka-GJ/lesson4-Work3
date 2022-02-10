"use strict";

//Создать массив А размерностью n. Заполнить случайными числами любом диапазоне. 
//Например A = [23,1,2,52,5,34,23,6,246,436];
//проверить все числа на простоту, и найденные простые числа сохранить в массив B.
//найти максимальное число и минимальное число.
n = +prompt('Укажите длину массива');
A = new Array(n);
PrimeList = new Array();

for (var i = 0; i < A.length; i++) {
  A[i] = Math.floor(Math.random() * 30);
  arr = A[i];

  if (arr < 2) {
    continue;
  }

  isPrime = true;

  for (j = 2; j < arr; j++) {
    if (arr % 2 == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    PrimeList.push(arr);
    max = PrimeList[0];
    min = PrimeList[0];

    for (var m = 1; m < PrimeList.length; m++) {
      if (PrimeList[i] > max) {
        max = PrimeList[i];
      }

      if (PrimeList[i] < min) {
        min = PrimeList[i];
      }
    }
  }
}

console.log(A);
console.log(PrimeList);
console.log(max, min);
var n = +prompt('Укажите длину массива');
A = new Array(n);
DoubleList = new Array();

for (var _i = 0; _i < A.length; _i++) {
  A[_i] = Math.floor(Math.random() * 20);
  double = A[_i];
  isDouble = true;

  for (j = 0; j < double; j++) {
    if (double != A[_i]) {
      isDouble = false;
      break;
    }
  }

  if (isDouble) {
    DoubleList.push(double);
  }
}

console.log(A);
console.log(DoubleList);