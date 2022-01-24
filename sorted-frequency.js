function sortedFrequency() {
    let firstIdx = findFirstChar(arr, num);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = findLastChar(arr, num);
    return lastIdx - firstIdx + 1;
}

function findFirstChar(arr, num, leftIdx = 0, rightIdx = arr.length -1) {
    if (rightIdx >= leftIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if((middleIdx === 0 || num > arr[middleIdx - 1]) && arr[middleIdx] === num) {
            return middleIdx;
        } else if (num > arr[middleIdx]) {
            return findFirstChar(arr, num, middleIdx + 1, rightIdx)
        } else {
        return findFirstChar(arr, num, leftIdx, middleIdx -1)
        } 
    }
    return -1;
}

function findLastChar(arr, num, leftIdx = 0, rightIdx = arr.length - 1) {
    if (rightIdx >= leftIdx) {
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2)
      if ((middleIdx === arr.length - 1 || num < arr[middleIdx + 1]) && arr[middleIdx] === num) {
        return middleIdx;
      } else if (num < arr[middleIdx]) {
        return findLastChar(arr, num, leftIdx, middleIdx - 1)
      } else {
        return findLastChar(arr, num, middleIdx + 1, rightIdx)
      }
    }
    return -1
  }

module.exports = sortedFrequency