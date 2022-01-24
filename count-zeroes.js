function countZeroes(arr) {
    let firstZero = findFirstIdx(arr)
    if (firstZero === -1) return 0;
  
    return arr.length - firstZero
}

function findFirstIdx(arr, leftIdx = 0, rightIdx = arr.length -1) {
    if (rightIdx >= leftIdx) {
        let middleIdx = leftIdx + Math.floor((rightIdx - leftIdx) / 2);
        if((middleIdx === 0 || arr[middleIdx - 1] ===1) && arr[middleIdx] === 0) {
            return middleIdx;
        } else if (arr[middleIdx] === 1) {
            return findFirstIdx(arr, middleIdx +1, rightIdx)
        }
        return findFirstIdx(arr, leftIdx, middleIdx -1)
    }
    return -1;
}


module.exports = countZeroes