const reverseInt = (int) => {
    return parseInt(int.toString().split("").reverse().join("")) * Math.sign(int);
}

module.exports = reverseInt;