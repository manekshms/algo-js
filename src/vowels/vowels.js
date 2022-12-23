// const vowels = (str) => {
//     return str.toLowerCase().split("").filter(item => ['a', 'e', 'i', 'o', 'u'].includes(item)).length;
// }

const vowels = (str) => {
    return str.toLowerCase().match(/[aeiou]/g)?.length || 0 ;
}

module.exports = vowels;