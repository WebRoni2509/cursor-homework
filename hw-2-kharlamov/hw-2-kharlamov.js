
let firstNum = +prompt('Введіть число #1');
//integer check for number 1
while(!Number.isInteger(firstNum) || firstNum == '' || isNaN(firstNum) ){
  firstNum = +prompt('Введіть ціле число!');
}

let secondNum = +prompt('Введіть число #2', firstNum + 1);
//integer check for number 2
while(!Number.isInteger(secondNum) || firstNum >= secondNum || secondNum == '' || isNaN(secondNum)  ){
  secondNum = +prompt('Введіть ціле число, яке є більшим від числа #1!')
}

let total = null;

let skipIfEven = confirm('Пропустити парні числа?');
//even numbers skip if true
while(firstNum <= secondNum){
  if(skipIfEven){
    if(firstNum % 2 === 0){
      
      firstNum++  
      continue;
    }
  }
  total = total + firstNum;
  firstNum++ 
}

console.log(total);
document.writeln(`
  Чи пропускати парні числа: ${skipIfEven} <br>
  Результат: ${total}
`);