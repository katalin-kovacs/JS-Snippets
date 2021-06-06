// This snippet removes duplicate values in an array.

const filterNonUnique = arr => [...new Set(arr)];

filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]