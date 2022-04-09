// Only change code below this line
function sumFibonacci(num) {
    if (num <= 0) {
        return 0;
    } else {
        var fib = [1, 1];
        var sum = 2;
        if (num === 1) {
            sum = 1;
            return sum;
        }
        for (var i = 2; i <= num; i++){
            fib[i] = fib[i-1] + fib[i - 2];
            if (fib[i] % 2 == 1 && fib[i] <= num) {
                sum += fib[i];
            }
        }
        return sum;
    }
}
// Only change code above this line
console.log(sumFibonacci(1)); // Change this line
console.log(sumFibonacci(10)); // Change this line
console.log(sumFibonacci(20)); // Change this line
console.log(sumFibonacci(4)); // Change this line
console.log(sumFibonacci(-5)); // Change this line
module.exports = sumFibonacci;
