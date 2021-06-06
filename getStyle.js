// This snippet can be used to get the value of a CSS rule for a particular element.

const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];

getStyle(document.querySelector('p'), 'font-size'); // '16px'