// Slice and Splice
// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let myArr1 = [...arr1];
  let myArr2 = [...arr2];
  myArr2.splice(n, 0, ...myArr1);
  return myArr2;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
