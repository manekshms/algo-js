const palindrome = (str) => str === str.split("").reverse().join("");

// const palindrome = (str) => {
//     let isPalindrome = true;
//     for(let i = 0; i < str.length; i++) {
//         if(i > (str.length - 1) -i) {
//             break;
//         }
//         if(str[i] !== str[(str.length - 1) - i]) {
//             isPalindrome = false;
//             break;
//         }
//     }
//     return isPalindrome;
// }

module.exports = palindrome;