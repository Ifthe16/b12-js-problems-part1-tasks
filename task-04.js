/* Task-04 */
function findLongestWord(str) {
    const words = str.split(' ');
    let longest = "";
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

const sentence = "I am learning Programming to become a programmer";
const longestWord = findLongestWord(sentence);
console.log(longestWord);