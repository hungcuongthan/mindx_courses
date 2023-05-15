function numberOneTriangle(n) {
  // Ensure n is within the valid range
  if (n < 1 || n > 10) {
    console.log("Please provide a number within the range of 1 to 10.");
    return;
  }

  // Build the triangle
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
}

numberOneTriangle(5);
