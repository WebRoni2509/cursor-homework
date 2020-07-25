
// 1
const getMaxDigit = (digit) => {
  digit = (digit + '').split('').sort();
  return `Найбільша цифра з числа ${(digit).join('')} = ${digit[digit.length - 1]}`  
}

document.writeln(`Функція №1 - отримати найбільшу цифру з числа ${getMaxDigit(765567221833)}`)

// 2
const degreeOfNum = (num, deg ) => {
    let res = 1;
    for(let i = 0; i < deg; i++)
    {
        res = res * num;
    }
    return res;
}
console.log(degreeOfNum(2, 2)); 

// 3
const capitalizeWord = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
}
console.log(capitalizeWord('roman'));

//4
const countTax = (salaryAmount) => {
  let taxAmount = 18;
  let militaryTax = 1.5;
  if(!Number.isInteger(salaryAmount)){
    console.log('Введіть число')
  }
  return salaryAmount - (salaryAmount / 100 * (taxAmount + militaryTax)).toFixed(2);
}
console.log(countTax(1000));

//5
const getRandomNubmer = (fromNumber, toNubmer) => {
  return Math.floor(Math.random() * (toNubmer - fromNumber + 1) + fromNumber);
}
console.log(getRandomNubmer(1, 10));

//6
const countLetters = (letterToFind, wordToCheck) => {
  let lettersCounter = 0;
  for(let i = 0; i < wordToCheck.length; i++){
    if(letterToFind === wordToCheck[i])
      lettersCounter++
  }
  return lettersCounter
}
console.log(countLetters('s','aasasdsad'));

//9 
const deleteLetters = (letterToDelete, wordToCheck) => {

  for(let i = 0; i < wordToCheck.length; i++){
    wordToCheck = wordToCheck.replace(letterToDelete, '')
  }
  return wordToCheck;
}
console.log(deleteLetters('l','hello world'));







