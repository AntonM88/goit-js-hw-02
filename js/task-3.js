function getElementWidth(content, padding, border) {
  const x = parseFloat(content);
  const y = parseFloat(padding);
  const z = parseFloat(border);

  return x + y * 2 + z * 2;
}

console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
