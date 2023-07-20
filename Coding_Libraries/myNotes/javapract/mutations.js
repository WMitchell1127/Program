function mutation(arr) {
    let word = [...arr[0].toLowerCase()]
    let comp = arr[1].toLowerCase()
    for (let i = 0; i < comp.length; i++) {
        if(!word.includes(comp[i])) return false
    }
    return true
}



console.log(mutation(["hello", "hey"])) // should return false.
console.log(mutation(["Hello", "Hello"])) // should return true.
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])) // should return true.
console.log(mutation(["Mary", "Army"])) // should return true.
console.log(mutation(["Alien", "line"])) // should return true.
console.log(mutation(["voodoo", "no"])) // should return false.
console.log(mutation(["Mary", "Aarmy"])) // should return true.