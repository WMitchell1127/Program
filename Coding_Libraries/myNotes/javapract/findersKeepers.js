function findElement(arr, func) {
  
    return func(arr)
}

console.log(findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; })) // should return 8.
console.log(findElement([1, 3, 5, 9], function (num) { return num % 2 === 0; })) // should return undefined.