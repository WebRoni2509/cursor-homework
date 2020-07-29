
const getRandomArray = (length, minNum, maxNum) => {
  let arr = Array(length);
  for(let i = 0; i < arr.length; i++){
    arr[i] = Math.floor(Math.random() * (maxNum - minNum)) + minNum;
  }
  return arr;
}
console.log(getRandomArray(12, 1, 110))