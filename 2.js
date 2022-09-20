let array = [1, 2, [3, 4, [5]]];

function flatten(array) {
  const newArray = [];

  array.forEach((element) => {
    if (Array.isArray(element)) {
      newArray.push(...flatten(element));
    } else {
      newArray.push(element);
    }
  });
  return newArray;
}
console.log(flatten(array));
