// concat array 

// let array1 = [1, 2, 3, 4];
// let array2 = [1, 2, 3, 4];

// let concat = array1.concat(array2);
// console.log(concat);
// let array3 = [...array1, ...array2];
// console.log(array3);



// if(array1===array2) {
//     console.log("both are not same")
//     }
//     else {
//         console.log("both same array")
//     }

// transeform Array
// map /// Internally loop chal raha hota hai 
// let array1 = [1, 2, 3, 4];
// let mappedArray = array1.map((value,index,arr)=>{
//     return value*2;
// })
// console.log(array1)
// console.log(mappedArray)




// Split and Join Array
let array = [10, 20, 30, 40]
console.log(array);
console.log(array.toString())  // output - 10,20,30,40     by default seperator Comma rahta hai 
console.log(array.join("|")) // output - 10|20|30|40  .. Its custom separator
let string = array.join("|");
let splitString = string.split("|"); // Again Convert in Arrary 
console.log(splitString);  // array in string format 

let arr = splitString.map((value) => {
    return +value;
})

console.log(arr);


// reverse array
// let array =[10,20,30,40]
// // let reverseArry = array.reverse();
// const k = array.length - 1;
// for (const i of array) {
//     array[k]=array[i];
// }
// console.log(array)
//console.log(reverseArry);


