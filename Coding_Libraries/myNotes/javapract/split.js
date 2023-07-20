
// Use split, to get ride of everything after the second comma.  After getting rid of "get rid of me" make sure to return a string not an array
//  Use split, to get ride of everything after the second comma.
// Hint, split returns an array, you will need to use one other method to return a string instead of an array

const splitThis = (str) => str.split(',', 2).join()


console.log(splitThis("Use split, to get ride of everything after the second comma., get rid of me")) // =>

// expected output => Use split, to get ride of everything after the second comma.

//======================================SLICE======================================================

// Using slice get rid of all the doubles in the sentence
// Hint  Remember that slice --DOES Not-- modify the original data 
// It extracts a section of a string and returns it as a new string,
// const sliceMe = str => str.slice(4, 30) + '.'


// console.log(sliceMe("Get Get rid of all the doubles. doubles."))
// Expected output => Get rid of all the doubles.
//--------------------------------------------------------------------

// Using slice get rid of all the double words in the sentence using slice only
// Hint  Remember that slice --DOES Not-- modify the original data 
// It extracts a section of a string and returns it as a new string,

// console.log(sliceMe("Get Get rid rid of of the the doubles doubles.")) 
// expected output => Get rid of the doubles


//=======================================SPLICE================================================
// Splice is not a string method, It is a method that can be used on ARRAYS
// Splice also does not modify the origanl data, it returns a new arr 
// It takes two atleast two parameters and can take three +++++++++.
// parameter one is START
// parameter two is COUNT -- number of items-indexs to be deleted following the start point
// parameter three and so on are the items to insert


// Use splice to remove the doubles

// console.log(spliceMe([1,1,2,2]))

//----------------------------------------------------------------------------------------------

// use splice to remove ,3,4,5,6,7,8,9,10 and replace it with ["3-10"] in a nested array  


// function spliceAdd(arr) {
//     arr.splice(2,8, ["3-10"])
//     return arr
//   }



// console.log(spliceAdd([1,2,3,4,5,6,7,8,9,10]))
//expected output => [ 1, 2, [ '3-10' ] ]

//----------------------------------------------------------------------------------------------

// Use splice to add the string "Everything over 10" to the end of the array



// console.log(spliceAdd100([1,2,3,4,5,6,7,8,9,10]))
//expected output => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Everything over 100' ]













//   -------------------  ANSWERS  ---------------------- 


// function splitThis(str) {
//     return str.split(",", 2).join()
// }
// const splitThis = (str) => str.split(',', 2).join()




// function sliceMe(str) {
//     return str.slice(4, 30) + '.'
// }
// const sliceMe = str => str.slice(4, 30) + '.'



// function sliceMe(str) {
//     let newStr1 = str.slice(4, 12)
//     let newStr2 = str.slice(19, 27)
//     let newStr3 = str.slice(37, 488)
//     return newStr1 + newStr2 + newStr3
// }

// function spliceMe(arr){
//     arr.splice(1,2)
//     return arr
// }





// function spliceAdd(arr) {
//     arr.splice(2,8, ["3-10"])
//     return arr
//   }





// function spliceAdd100(arr) {
//     arr.splice(10,0,"Everything over 10")
//     return arr
//   }