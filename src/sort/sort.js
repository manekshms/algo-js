function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        if(i !== minIndex) {
            const temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

function merge(left, right) {
    const out = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            out.push(left.shift());
        }else {
            out.push(right.shift());
        }
    }
    return [...out, ...left, ...right];
}

function mergeSort(arr) {
    if(arr.length === 1) {
        return arr;
    }
    const midPoint = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, midPoint)), mergeSort(arr.slice(midPoint)))
}

module.exports = {
    bubbleSort,
    selectionSort,
    mergeSort,
    merge
}