// function levelWidth(root, level = 1, levelMap = {1 : 1}) {
//     level = level + 1;
//     levelMap[level] = levelMap[level] ? levelMap[level] + root.children.length : root.children.length;
//     root.children.forEach(item => {
//         levelWidth(item, level, levelMap);
//     })
//     return Object.values(levelMap).filter(item => item > 0);
// }

function levelWidth (root) {
    let counter = [0];
    const arr = [root, 's'];
    while(arr.length> 1) {
        const node = arr.shift();
        if(node === 's') {
            counter.push(0);
            arr.push('s');
        }else {
            counter[counter.length - 1]++;
            arr.push(...node.children);
        }
    }
    return counter;
}

module.exports = levelWidth;