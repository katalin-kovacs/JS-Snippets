// This snippet can be used to get the type of a value.

const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
  
getType(new Set([1, 2, 3])); // 'set'