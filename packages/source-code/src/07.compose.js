/**
  compose: 它允许你将多个函数组合成一个单一的函数。compose 的核心思想是将多个函数按顺序执行，
  前一个函数的输出作为后一个函数的输入，最终返回最后一个函数的结果。
 */

function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}


function f1(arg) {
  console.log("f1", arg);
  return arg;
}
function f2(arg) {
  console.log("f2", arg);
  return arg;
}
function f3(arg) {
  console.log("f3", arg);
  return arg;
}

compose(f1, f2, f3)("omg"); //f1(f2(f3("omg")));