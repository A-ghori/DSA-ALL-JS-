function subset(arr, i, curr) {
  if (i === arr.length) {
    console.log(curr);
    return;
  }

  // Include
  curr.push(arr[i]);
  subset(arr, i + 1, curr);

  // Exclude
  curr.pop(); // backtrack
  subset(arr, i + 1, curr);

  console.log(arr[i]);
}

subset([1, 2, 3], 0, []);
