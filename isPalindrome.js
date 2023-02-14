

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

var isPalindrome2 = function (x) {
    if (x < 0) return false;
    if (x < 10) return true;
    if (x % 10 === 0) return false;

    let reversed = 0;
    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return x === reversed || x === Math.floor(reversed / 10);
};