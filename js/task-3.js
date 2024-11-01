'use strict';

function getElementWidth(content, padding, border) {
  let numericalContent = Number.parseInt(content);
  let numericalPadding = Number.parseInt(padding);
  let numericalBorder = Number.parseInt(border);
  let result = numericalContent + numericalPadding * 2 + numericalBorder * 2;
  return `${result}px`;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200