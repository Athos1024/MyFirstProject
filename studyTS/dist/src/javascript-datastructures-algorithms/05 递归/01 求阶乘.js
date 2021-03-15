function factorialIterative(n) {
    if (n === 1 || n === 0) {
        //出口
        return 1;
    }
    return n * factorialIterative(n - 1); //入口
}
function getFibonacci(n) {
    if (n < 1)
        return 0;
    if (n < 2)
        return 1;
    return getFibonacci(n - 1) + getFibonacci(n - 2);
}
function fibonacciMemoization() {
    var memo = [0, 1];
    var fibonacci = function (n) {
        if (memo[n] != undefined) {
            return memo[n];
        }
        return (memo[n] = fibonacci(n - 1) + fibonacci(n - 2));
    };
    return fibonacci;
}
//# sourceMappingURL=01%20%E6%B1%82%E9%98%B6%E4%B9%98.js.map