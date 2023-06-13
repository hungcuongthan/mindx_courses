function deDup(arrayA) {
  let distinctValues = [];
  for (i = 0; i < arrayA.length; i++) {
    if (distinctValues.includes(arrayA[i]) == false) {
      distinctValues.push(arrayA[i]);
    }
  }
  return distinctValues;
}

console.log(deDup([1, 1, 1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8]));
