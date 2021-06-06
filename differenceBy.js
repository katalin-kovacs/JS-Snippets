// This method returns the difference between two arrays, after applying a given function to each element of both lists.

const differenceBy = (a, b, fn) => {
    const s = new Set(b.map(fn));
    return a.filter(x => !s.has(fn(x)));
  };
  
  differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
  differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]