// Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

function mutation(arr) {
  let arr1 = arr[0].toLowerCase().split("");
  let arr2 = arr[1].toLowerCase().split("");
  let result = [];
  for (let i = 0; i < arr2.length; i++) {
    const myletter = arr2[i];
    if (arr1.includes(myletter) !== true) {
      result.push(myletter);
    }
  }
  if (result.length === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(mutation(["hello", "hey"]));
