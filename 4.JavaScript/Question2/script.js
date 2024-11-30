const numbers = [1, 2, 3, 4, 5,6];

numbers.push(6);
console.log("After Push:", numbers);

numbers.pop();
console.log("After Pop", numbers);

numbers.shift();
console.log("After Shift", numbers);

numbers.unshift(0);
console.log("After unshift", numbers);

const slicedArray = numbers.slice(1,4);
console.log("Sliced Array", slicedArray); 

const startIndex = numbers.indexOf(1, 1);
const index = numbers.indexOf(5, startIndex);
console.log("Index Of 5", index); 

const removedElements = numbers.splice(0, 5, 0, 8, 9);
console.log("After Splice", numbers);      
console.log(removedElements); 

const numberToCheck = 3;
if (numbers.includes(numberToCheck)) {
  console.log(`3 exists in array :true`);
} else {
  console.log(`3 exists in array :false`);
}

const originalArray = [0, 8, 9, 4, 5, 6];

const reversed = originalArray.reverse();
console.log("After Reverse", reversed); 

const sortedArray = originalArray.sort((a, b) => a - b);
console.log("After Sort", sortedArray);

const originalString = "Javascript is awesome";
const uppercaseString = originalString.toUpperCase();
console.log("Uppercase:", uppercaseString);

const lowercaseString = originalString.toLowerCase();
console.log("LOWERCASE:", lowercaseString);

const length = originalString.length;
console.log("Length:", length);

const substring = "is";
const index1 = originalString.indexOf(substring);
console.log("Index of is ", index1);

const substring1 = originalString.substring(4, 10);
console.log("Substring:", substring1); 

const modifiedString = originalString.replace("awesome", "amazing");
console.log("Replaces String:",modifiedString); 

const wordArray = originalString.split(" ");
console.log(wordArray);
