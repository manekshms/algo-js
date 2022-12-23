// const anagrams = (str1, str2) => {
//     const first = str1.replace(/[^\w]/g, "").toLowerCase();
//     const second = str2.replace(/[^\w]/g, "").toLowerCase();
//     if(first.length !== second.length) return false;
//     const firstMap = {};
//     const secondMap = {};
//     for(let i = 0; i < first.length; i++) {
//         firstMap[first[i]] = firstMap[first[i]] ? ++firstMap[first[i]] : 1;
//         secondMap[second[i]] = secondMap[second[i]] ? ++secondMap[second[i]] : 1;
//     }
//     for(let key in firstMap) {
//         if(firstMap[key] !== secondMap[key]) return false;
//     }
//     return true;
// }

const anagrams = (strA, strB) => {
    const first = strA.replace(/[^\w]/g, '').split('').sort().join();
    const second = strB.replace(/[^\w]/g, '').split('').sort().join();
    return first === second;
}

module.exports = anagrams;