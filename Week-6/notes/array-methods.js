const numbers = [1, 2, 3, 4, 5];

const users = [
    { name: 'Alice', age: 25, active: false },
    { name: 'Bob', age: 30, active: true },
    { name: 'Charlie', age: 35, active: true },
    { name: 'David', age: 40, active: false },
    { name: 'Eve', age: 45, active: true }
];

/**
 * forEach() method executes a provided function once for each array element.
 * - It does not execute the function for empty elements.
 * - It does not change the original array.
 * - It returns undefined.
 * - It is not chainable.
 * - It does not break the loop on a return statement.
 */
numbers.forEach((num, index) => {
    sum += num
    console.log(`[${index}] = ${num}`)
});

/**
 * map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
 * - It does not execute the function for empty elements.
 * - It does not change the original array.
 * - It returns a new array.
 * - It is chainable.
 * - It does not break the loop on a return statement.
 */

const numbersDoubled = numbers.map((num) => {
    return num * 2;
});
console.log('Doubled:', numbersDoubled);
console.log('Original:', numbers);

/**
 * filter() method creates a new array with all elements that pass the test implemented by the provided function.
 * - It does not execute the function for empty elements.
 * - It does not change the original array.
 * - It returns a new array.
 * - It is chainable.
 * - It does not break the loop on a return statement.
 */

const evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
});
console.log(evenNumbers);

const activeUsers = users.filter((user) => {
    return user.active;
});
const inactiveUsers = users.filter((user) => {
    return !user.active;
});
console.log('Active:', activeUsers);
console.log('Inactive:', inactiveUsers);

/**
 * reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 * - It does not execute the function for empty elements.
 * - It does not change the original array.
 * - It returns a single value.
 * - It is chainable.
 * - It breaks the loop on a return statement.
 */

const sum = numbers.reduce((num, total) => {
    return total + num;
});

const averageAge = users.reduce((total, user) => {
    return total + user.age;
}, 0) / users.length;

console.log('Sum:', sum);
console.log('Average Age:', averageAge);