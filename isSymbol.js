// This snippet can be used to check whether an argument is a symbol.

const isSymbol = val => typeof val === 'symbol';

isSymbol(Symbol('x')); // true