
const generateIdBtn = document.querySelector('#generateId')
const idResult = document.querySelector('#idResult')

function* createIdGenerator(){
  let i = 1;
  while(true)
    yield i++;
}
const idGenerator = createIdGenerator();

generateIdBtn.addEventListener('click', () => {
  return idResult.innerHTML = idGenerator.next().value
})

//advanced

// function* newFontGenerator(fontSize){
//   fontSize = 14;
//   if(fontSize === 'up'){
//     yield fontSize = fontSize + 2;
//   }else if(fontSize === 'down'){
//     yield fontSize = fontSize - 2;
//   }else{return}
// }

