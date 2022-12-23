const steps = (number) => {
    for(let i = 1; i <= number; i++) {
        console.log(new Array(number).fill(" ").fill("#", 0, i).join(""))
    }
}

module.exports = steps;