const capitalize = (str) => {
    let newStr = "";
    let capitalizeSwitch = true;
    for(let char of str) {
        newStr += capitalizeSwitch && char.match(/\w/).length > 0 ? char.toUpperCase() : char;
        capitalizeSwitch = false;
        if(char === " ") capitalizeSwitch = true;
    }
    return newStr;
}

module.exports = capitalize;