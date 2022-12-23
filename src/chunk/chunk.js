const chunk = (arr, n) => {
    const out = [];
    let counter = 0;
    let newSet = [];
    for(let i = 0; i < arr.length; i++) {
        newSet.push(arr[i]);
        counter++;
        if(counter === n || arr[i + 1] === undefined) {
            out.push(newSet);
            newSet = [];
            counter = 0;
        }
    }
    return out;
}

module.exports = chunk;