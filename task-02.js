/* Task-02 */
function countTheNumber(array, find) {
    let count = 0;
    for (const item of array) {
        if (item === find) {
            count++;
        }
    }
    return count;
}

const numbers = [5, 6, 11, 12, 98, 5];

const count = countTheNumber(numbers, 5);

const count2 = countTheNumber(numbers, 25);

console.log(count);
console.log(count2);

