function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
    if (num % i === 0) return false;
  return num > 1;
}

function calculate() {
  let a = document.getElementById("num1").value;
  let b = document.getElementById("num2").value;
  let sum = 0;

  for (let i = Math.max(2, a); i <= b; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  document.getElementById("result").innerText = "Sum of primes: " + sum;
}
