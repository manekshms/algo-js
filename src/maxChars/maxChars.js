const maxChars = (str) => {
    return str.split("").reduce((prev, current) => {
        prev[current] ? prev[current]++ : prev[current] = 1;
        if(prev[current] > prev.count) {
            prev.char = current;
            prev.count = prev[current];
        }
        return prev;
    }, {char: null, count: 0}).char;
}

module.exports = maxChars;