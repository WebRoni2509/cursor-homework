
const numbersToUse = [6, 2, 55, 11, 78, 2, 55, -55, 77, 57, 87, 23, -34, 2, 56, 3, 2];

//function #1
const getRandomArray = (length, minNum, maxNum) => {
  let arr = Array(length);
  for(let i = 0; i < arr.length; i++){
    arr[i] = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
  }
  return arr.join(', ');
}

//function #5
const filterEvenNumbers = (...numbersToUse) => numbersToUse.filter(number => !(number % 2 === 0)).join(', ');

//function #6
const countPositiveNumbers = (...numbersToUse) => numbersToUse.filter(number => number > 0).length;

//function #7
const getDivideByFive = (...numbersToUse) => numbersToUse.filter(number => number % 5 === 0).join(', ');

//function #9
const divideByThree = (wordToDivide) => {
  let wordArr = [];
  for(let i = 0; i < wordToDivide.length; i = i + 3){
    
    wordArr.push(wordToDivide.slice(i, i + 3))
  }
  return wordArr;
}

 
document.writeln(`Масив випадкових чисел: <strong>${getRandomArray(15, 1, 111)}</strong> <br>`); //function #1 output
document.writeln(`Непарні числа: <strong>${filterEvenNumbers(...numbersToUse)}</strong> <br>`)//function #5 output
document.writeln(`Числа які більші ніж 0: <strong>${countPositiveNumbers(...numbersToUse)}</strong> <br>`)//function #6 output
document.writeln(`Числа які діляться на 5: <strong>${getDivideByFive(...numbersToUse)}</strong> <br>`)//function #7 output
document.writeln(`Слово розбите на умовні склади з трьох букв: <strong>${divideByThree('абракадабра')}</strong> <br>`); //function #9 output

