const add = function(a, b) {
  let arr = [a, b];
  if (a >= 0 && b >= 0) {
    let result = arr.reduce((sum, current) => sum + current, 0);
    return result
  }
};

const subtract = function(a, b) {
  function compNum(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

  let arr = [a, b];

  arr.sort(compNum);
  arr.reverse();

  let result = arr.reduce((difference, current) => difference - current);
  return result
};

const sum = function(N) {
	let arr = [N];
  if (N == '') {
    return 0
  }
  let newArr = arr.reduce((sum, current) => sum + current);
  let result = newArr.reduce((sum, current) => sum + current);
  return result
};

const multiply = function(N) {
  let arr = [N];
  let newArr = arr.reduce((sum, current) => sum + current);
  let result = newArr.reduce((product, current) => product * current);
  return result
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(N) {
  if (N == 0) {
    return 1
  }
	let arr = [N];
  for (let i = 1; i < N; i++) {
    arr.push(N - i);
  }
  arr.reverse();
  let result = arr.reduce((product, current) => product * current);
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
