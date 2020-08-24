
const DELAY_TIME = 50;
let outputContainer = document.querySelector('.output');
let sign = parseInt(Date.now().toString().slice(-5))

const getRandomChinese = (length) => {
  return new Promise((resolve) => {
    let i = 0;
    let chineseChars = '';
    while(i < length){
      sign += DELAY_TIME;
      chineseChars += String.fromCharCode(sign);
      i++
    }
    setTimeout(() => resolve(chineseChars),
    DELAY_TIME * length)

  })
} 
getRandomChinese(5).then(res => {
	console.log(`Результат: ${res}`)
});

