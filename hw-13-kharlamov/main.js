
const generateIdBtn = document.querySelector('.generateId')
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
