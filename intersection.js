// This snippet can be used to get an array with elements that are included in two other arrays.

const intersection = (a, b) => {
    const s = new Set(b);
    return a.filter(x => s.has(x));
  };
  
  intersection([1, 2, 3], [4, 3, 2]); // [2, 3]