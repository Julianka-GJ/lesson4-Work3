//--------------------- Задание №1 -----------------------------

//Создать массив А размерностью n. Заполнить случайными числами любом диапазоне. 
//Например A = [23,1,2,52,5,34,23,6,246,436];
//проверить все числа на простоту, и найденные простые числа сохранить в массив B.
//найти максимальное число и минимальное число.

n= +prompt('Укажите длину массива');

A = new Array(n);
PrimeList = new Array();


for (let i=0; i<A.length; i++) {
    A[i] = Math.floor(Math.random()*30);
    arr = A[i];
    if(arr<2) {
        continue;
    }
    
    isPrime = true;
    for (j=2; j<arr; j++) {
        if (arr%j==0) { 
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        PrimeList.push(arr);

        max = PrimeList[0];
        min = PrimeList[0];

        for (let m=1; m<PrimeList.length; m++) {
            if (PrimeList[m] > max) {
                max = PrimeList[m];
            }

            if (PrimeList[m] < min) {
                min = PrimeList[m];
            }
        }
    }
}

console.log(A);
console.log(PrimeList);
console.log(max, min);

//------------------- Задание №2 ----------------------------------------------

//Перевернуть массив, т.е. если был массив 1, 5, 6, 2, 4 -- то мы должны получить 4, 2, 6, 5, 1. Нельзя использовать стандартный метод reverse(). Постарайтесь не использовать дополнительный массив. Оригинальный массив А сохранять не нужно (т.е. он должен перевернуться).

let A=[1, 2, 3, 4, 5];
console.log(A);

for (i=A.length-1, j=0; i>A.length/2; i--, j++) {
   [A[j], A[i]] = [A[i], A[j]];
}
console.log(A);

//-------------------------- Задание №3 -------------------------------------------------

//Создать массивы А и В. Заполнить случайными числами. Найди все элементы которые повторяются в массивах А и B.

  
n= +prompt('Укажите длину массива');
A = new Array(n);
DoubleListA = new Array();
B = new Array(n);
DoubleListB = new Array();
DoubleListAB = new Array();


for (let i=0, j=0; i<A.length, j<B.length; i++, j++) {
  A[i] = Math.floor(Math.random()*20);
  B[j] = Math.floor(Math.random()*20);
}
console.log(A);
console.log(B);

// Поиск дублей в массиве А 

for(j = 0; j < A.length; j++){
  for(f =j+1; f < A.length; f++) {
    if((A[f] === A[j]) && (j!=f)){
        DoubleListA.push(A[j]);
    }
  }
}

console.log('Элементы которые повторяются A: ', DoubleListA);

// Поиск дублей в массиве B 

for(j = 0; j < B.length; j++){
  for(f =j+1; f < B.length; f++) {
    if((B[f] === B[j]) && (j!=f)){
        DoubleListB.push(B[j]);
    }
  }
}

console.log('Элементы которые повторяются B: ', DoubleListB);

// Поиск элементов в массивах А и В, которые повторяются  

let k = 0;

  for(var a = 0; a < A.length; a++){
    for(var b = 0; b< B.length; b++){
      if(A[a] === B[b]){
        k++; // количество повторений
        console.log('Элементы которые повторяются : ', A[a]); // повторяющиеся элементы
      }
    }
  }
  console.log('количество повторений : ', k);

  //-------------------------- Задание №4 --------------------------------------------

  //В одномерном массиве произвести такую замену: 1 элемент поменять с 2, 3 элемент поменять с 4, 5 элемент поменять с 6 и тд. Если длинна массива непарная - последний элемент не трогать.

let A=[1, 2, 3, 4, 5, 10, 25, 38];
console.log(A);


for (i=0; i<A.length-1; i+=2) {
  [A[i], A[i+1]] = [A[i+1], A[i]]
}
console.log(A)



  















