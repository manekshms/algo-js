const fillArray = (n) => {
    const container = [];
    for(let i = 0; i < n; i++) {
        container.push(new Array().fill().map(() => null));
    }
    return container;
}

const matrix = (n, row = 0, current = 1, array = null) => {
    if(current > n * n) return array;
    if(array === null) array = fillArray(n);
    // fill top x
    for(let i = row; i < n - row -1; i++) {
        array[row][i] = current;
        current++;
    }

    // fill y end
    for(let i = row; i < (n - row -1) ; i++) {
        array[i][n - row - 1] = current;
        current++;
    }

    // fill bottom x
    for(let i = n - row - 1; i >= row; i--) {
        array[n - row -1][i] = current;
        current++;
    }

    // fill y start
    for(let i = n - row -2; i > row; i--) {
        array[i][row] = current;
        current++;
    }
    return matrix(n, ++row, current, array);
}

console.log(matrix(6))

module.exports = matrix;