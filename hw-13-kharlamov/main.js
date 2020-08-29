
function* createIdGenerator(){
  let i = 1;
  while(true)
    yield i++;
}
const idGenerator = createIdGenerator();

// setInterval(() => {
//   return console.log(idGenerator.next().value)
// }, 1000); 

