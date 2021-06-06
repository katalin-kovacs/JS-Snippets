// This snippet iterates on each property of an object and iterates a callback for each one respectively.

const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));

forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1