function getIndexToIns(arr, num) {
arr.push(num)
return arr.sort((a,b) => a - b).indexOf(num)
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)) // should return 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)) // should return 2
console.log(getIndexToIns([40, 60], 50)) // should return 1
console.log(getIndexToIns([3, 10, 5], 3)) // should return 0