function destroyer(...arr) {
    let result = []
    let items =  arr.splice(0, 1)[0];
    for(let i = 0; i < items.length; i++) {
        if(!arr.includes(items[i])){
            result.push(items[i])
        }
    }
    return result
  }

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)) // should return [1, 1].
// console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)) // should return [1, 5, 1].
// console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)) // should return [1].
// console.log(destroyer([2, 3, 2, 3], 2, 3)) // should return [].
// console.log(destroyer(["tree", "hamburger", 53], "tree", 53)) // should return ["hamburger"].
// console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"))
 // should return [12,92,65]
