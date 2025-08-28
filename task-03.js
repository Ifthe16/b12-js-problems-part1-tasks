/* Task-03 */
function countVowels(str) {
    const newStr = str.toLowerCase();
    let count = 0;
    for (const letter of newStr) {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            count++;
        }
    }
    return count;
}


const sentence = "I am learning JavaScript";
const count = countVowels(sentence);
console.log(count);