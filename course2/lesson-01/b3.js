function checkCount(arrayA) {
  const countDict = {};
  let maxCount = 0;
  for (i = 0; i < arrayA.length; i++) {
    if (countDict.hasOwnProperty(arrayA[i])) {
      countDict[arrayA[i]] += 1;
    } else {
      countDict[arrayA[i]] = 1;
    }

    if (maxCount <= countDict[arrayA[i]]) {
      maxCount = countDict[arrayA[i]];
    }
  }

  const bigValues = Object.keys(countDict).filter(
    (key) => countDict[key] === maxCount
  );

  for (i = 0; i < bigValues.length; i++) {
    console.log(`{value: ${bigValues[i]}, count: ${maxCount}}`);
  }
}

checkCount([1, 2, 3, 5, 5, 6, 6]);
