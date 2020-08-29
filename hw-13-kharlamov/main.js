

function* idGen(){
  let index = 1;
  while(true)
    yield index++;
}

const counter = idGen();

setInterval(() => {
  return console.log(counter.next())
}, 1000); 

