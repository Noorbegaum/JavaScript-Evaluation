let arr = [3, 3, 1, 1, 1, 8, 3, 6, 8, 7, 8];

function maxFreq(arr) {
  let maxFreqEle = 0;
  let maxCount = 0;
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
      if (count > maxCount) {
        maxCount = count;
        maxFreqEle = arr[j];
        newArray.push(maxFreqEle);
      }
      // arr.splice(arr.indexOf(arr[i]),1)
    }
  }

  return newArray;
}
console.log(maxFreq(arr));
