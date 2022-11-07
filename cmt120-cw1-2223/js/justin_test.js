var funcsToTest = require('./c22075165');

// funcsToTest.exercise4({ "a/0": "a/1", "a/1": "b/0", "b/0": "b/0", "b/1": "a/1" }, "a", ['0', '0', '1', '1', '0', '0']);

// console.log(funcsToTest.exercise2('Maltese', 9.5, 6.7, true));
// console.log(funcsToTest.exercise2('Bulldog', 16, 44, false));
// console.log(funcsToTest.exercise2('Dalmatian', 18, 49, false));
// console.log(funcsToTest.exercise2('Dalmatian', 26, 63, true));


// { input: ['Maltese', 9.5, 6.7, true], output: true },
// { input: ['Bulldog', 16, 44, false], output: false },
// { input: ['Dalmatian', 18, 49, false], output: true },
// { input: ['Dalmatian', 26, 63, true], output: true }

// console.log(funcsToTest.exercise3([1, 2, 3, 4, 5]));
// console.log(funcsToTest.exercise3([7, 2, 4, 5]))
// console.log(funcsToTest.exercise3([5, 3, 1, 4, 2]))
// console.log(funcsToTest.exercise3([2, 4, 5, 7]))

// { input: [[1, 2, 3, 4, 5]], output: [[1, 3, 3, 5], [1, 11, 9, 25]] },
// { input: [[7, 2, 4, 5]], output: [[2, 4.5, 4.5, 7], [4, 23.5, 20.5, 49]] },
// { input: [[5, 3, 1, 4, 2]], output: [[1, 3, 3, 5], [1, 11, 9, 25]] },
// { input: [[2, 4, 5, 7]], output: [[2, 4.5, 4.5, 7], [4, 23.5, 20.5, 49]] }

// console.log(funcsToTest.exercise5('test_data/text1.txt'));
// console.log(funcsToTest.exercise5('test_data/text2.txt'));
// console.log(funcsToTest.exercise5('test_data/text3.txt'));
// console.log(funcsToTest.exercise5('test_data/text4.txt'));

// { input: 'test_data/text1.txt', output: [128, 8, 10, 36, 3, 3]},
// { input: 'test_data/text2.txt', output: [84, 0, 3, 19, 1, 4] },
//     { input: 'test_data/text3.txt', output: [81, 3, 12, 20, 2, 1] },
//     { input: 'test_data/text4.txt', output: [310, 0, 15, 74, 5, 3] },


// console.log(funcsToTest.exercise7(3, 2)); // true
// console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
// console.log(funcsToTest.exercise7(5, 2)); // false
// console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
// console.log(funcsToTest.exercise7(0.3, 3)); // true
// console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
// console.log(funcsToTest.exercise7(1.15, 2)); // false

// console.log(funcsToTest.exercise8('sehuoh'))
// console.log(funcsToTest.exercise8('caarto'))
// console.log(funcsToTest.exercise8('abcde'))
// console.log(funcsToTest.exercise8('abcdef'))


// { input: 'sehuoh', output: 1 },
//     { input: 'caarto', output: 5 },
//     { input: 'abcde', output: 0 },
//     { input: 'abcdef', output: 2 }

const green_1 = { 1: 'i', 3: 'c' }
const yellow_1 = { 'e': new Set([3]) }
const gray_1 = new Set(['r', 'a', 's', 'd', 'f']);

const green_2 = { 2: 'a' }
const yellow_2 = { 'a': new Set([3]), 'i': new Set([2]), 'l': new Set([3, 4]), 'r': new Set([1]) }
const gray_2 = new Set(['e', 't', 'u', 'o', 'p', 'g', 'h', 'c', 'm', 's'])

const green_3 = {}
const yellow_3 = { 'r': new Set([1]), 'i': new Set([2]), 'l': new Set([3]) }
const gray_3 = new Set(['g', 'o', 'u', 'p', 'c', 'h'])

const green_4 = { 4: 'r' }
const yellow_4 = { 'r': new Set([1]), 'i': new Set([1, 2]), 'l': new Set([0, 3]) }
const gray_4 = new Set(['g', 'o', 'u', 'p', 'c', 'h', 't', 'e'])

// console.log(funcsToTest.exercise9(green_1, yellow_1, gray_1))
// console.log(funcsToTest.exercise9([green_2, yellow_2, gray_2]))
// console.log(funcsToTest.exercise9([green_3, yellow_3, gray_3]))
// console.log(funcsToTest.exercise9([green_4, yellow_4, gray_4]))


// { input: [green_1, yellow_1, gray_1], output: 5},
// { input: [green_2, yellow_2, gray_2], output: 3},
// { input: [green_3, yellow_3, gray_3], output: 38},
// { input: [green_4, yellow_4, gray_4], output: 1}


// console.log(funcsToTest.exercise9(green_1, yellow_1, gray_1))

funcsToTest.exercise10(green_1, yellow_1, gray_1);


// the set of best words is: {'wince', 'yince', 'mince'}.
// In fact, the scores obtained are: 'niece' 10; 'yince', 6; 'piece', 10;
// 'wince', 6; 'mince', 6.



// npm --solutionfile=c22075165 run test-js