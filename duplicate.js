var arr = [
  3, 4, 5, 5, 3, 11, 2, 4, 5, 2, 3, 4, 7, 8, 5, 12, 12, 55, 4, 5, 11, 11,
];
var array = arr.reduce(function (prev, cur) {
  prev[cur] = (prev[cur] || 0) + 1;
  return prev;
}, {});

console.log(array);
