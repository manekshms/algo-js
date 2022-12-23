const pyramid = (n) => {
    const cols = (2 * n) - 1;
    const mid = Math.floor(cols/2);
    for(let row = 0; row < n; row++) {
        let step = "";
        for(let col = 0; col < cols; col++) {
            if(col >= mid - row && col <= mid +row) {
                step += "#";
            }else {
                step += " ";
            }
        }
        console.log(step);
    }
}

const square = (x, y) => {

}

// const pyramid = (n, row=0) => {
//     if(row >= n) {
//         return;
//     }
//     const cols = (2 * n) - 1;
//     const midPoint = Math.floor(cols / 2);
//     let step = "";
//     for(let col = 0; col < cols; col++) {
//        if(col >= (midPoint - row) && col <= (midPoint + row)) {
//         step += "#";
//        }else {
//         step += " ";
//        }
//     }
//     console.log(step);
//     pyramid(n, row + 1);
// }

pyramid(30);

module.exports = pyramid;