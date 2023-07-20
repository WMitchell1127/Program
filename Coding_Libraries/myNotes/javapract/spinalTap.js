const spinalCase = str => str.replace(/[_ ]/g, '-').toLowerCase()



console.log(spinalCase("AllThe-small Things")) // should return "all-the-small-things".
console.log(spinalCase("thisIsSpinalTap")) // should return "this-is-spinal-tap"

// console.log(spinalCase("This Is Spinal Tap")) // should return "this-is-spinal-tap"
// console.log(spinalCase("The_Andy_Griffith_Show")) // should return "the-andy-griffith-show".
// console.log(spinalCase("Teletubbies say Eh-oh")) // should return "teletubbies-say-eh-oh".