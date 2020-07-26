
// 1
const getMaxDigit = (digit) => {
  digit = (digit + '').split('').sort();
  return `Найбільша цифра з числа ${(digit).join('')} = ${digit[digit.length - 1]} <br>`  
}
document.writeln(getMaxDigit(765567221833))

// 2
const degreeOfNum = (num, deg ) => {
    let res = 1;
    for(let i = 0; i < deg; i++)
    {
        res = res * num;
    }
    return res;
}
document.writeln(`Ступінь числа: ${degreeOfNum(2, 20)} <br>`); 

// 3
const capitalizeWord = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
}
document.writeln(`Функція "Capitalize": ${capitalizeWord('roman')} <br>`);

//4
const countTax = (salaryAmount) => {
  let taxAmount = 18;
  let militaryTax = 1.5;
  if(!Number.isInteger(salaryAmount)){
    console.log('Введіть число')
  }
  return salaryAmount - (salaryAmount / 100 * (taxAmount + militaryTax)).toFixed(2);
}
document.writeln(`Заробітня плата з вирахуваним податком становить: ${countTax(1000)} <br>`);

//5
const getRandomNubmer = (fromNumber, toNubmer) => {
  return Math.floor(Math.random() * (toNubmer - fromNumber + 1) + fromNumber);
}
document.writeln(`Випадкове число від 1 до 10: ${getRandomNubmer(1, 10)} <br>`);

//6
const countLetters = (letterToFind, wordToCheck) => {
  let lettersCounter = 0;
  letterToFind = letterToFind.toLowerCase();
  wordToCheck = wordToCheck.toLowerCase();
  for(let i = 0; i < wordToCheck.length; i++){
    if(letterToFind === wordToCheck[i])
      lettersCounter++
  }
  return lettersCounter
}
document.writeln(`Кількість повторень букви: ${countLetters('s','aasasdsad')} <br>`);

//9 
const deleteLetters = (letterToDelete, wordToCheck) => {
  for(let i = 0; i < wordToCheck.length; i++){
    wordToCheck = wordToCheck.replace(letterToDelete, '')
  }
  return wordToCheck;
}
document.writeln(`Речення з видаленими буквами: ${deleteLetters('l','hello world')} <br>`);

//10
const isPalindrome = (stringToCheck) => {
  stringToCheck = stringToCheck.replace(/\s+/g, '').toLowerCase();
  let stringToCheckReverse = stringToCheck.split('').reverse().join('');
  
  if(stringToCheckReverse == stringToCheck){
  	return 'Is palyndrome'
  }
  else{
  	return 'It is not palyndrome'
  }
}
document.writeln(isPalindrome('Я несу гусеня'));




