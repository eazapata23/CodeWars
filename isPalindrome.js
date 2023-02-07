

// function isPalindrome(word) {
//     //word -> reverse that word - split reverse join
//     let reversedWord = word.split('').reverse().join('')
//     //revWord === word
//     if (word === reversedWord) {
//         return true
//     } else {
//         return false
//     }
// }


//arrow function
const isPalindrome = word => word === word.split('').reverse().join('');


console.log(isPalindrome('racecar'), 'true');
console.log(isPalindrome('bob'), 'true');
console.log(isPalindrome('tacos'), 'false');