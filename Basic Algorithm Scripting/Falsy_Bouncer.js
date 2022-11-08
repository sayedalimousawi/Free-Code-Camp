// Falsy Bouncer
// Remove all falsy values from an array. Return a new array; do not mutate the original array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.
function bouncer(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (Boolean(element) !== false) {
      arr2.push(element);
    }
  }
  return arr2;
}
console.log(bouncer([7, "ate", "", false, 9]));
