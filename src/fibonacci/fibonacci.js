const fibonacci = function (n){
    const cache = {}
    return (function fib(n){
        if(n < 2) {
            return n;
        }
        if(cache[n]) {
            return cache[n];
        }
        const result = fib(n - 1) + fib(n -2);
        cache[n] = result;
        return result;
    })(n)
}

module.exports = fibonacci;