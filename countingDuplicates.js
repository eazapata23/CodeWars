// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//1. This is a function called countDuplicates that takes in a string as an argument.
function duplicateCount(str) {
    // 2. The variable count is initialized to 0.
    // 3. The variable charMap is initialized to an empty object.
    let count = 0;
    let charMap = {};

    //4. A for loop is used to iterate through each character of the string, which has been converted to lowercase using the .toLowerCase() method.
    for (let char of str.toLowerCase()) {
        //5. If the character already exists in the charMap object, then its value is incremented by 1.
        //6. Otherwise, the character is added to the charMap object with a value of 1.
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    // 7. Another for loop is used to iterate through each key in the charMap object and check if its value is greater than 1. 
    // 8. If it is, then the count variable is incremented by 1. 
    for (let key in charMap) {
        if (charMap[key] > 1) count++;
    }

    //9. Finally, the function returns the value of count which represents how many duplicate characters were found in the string argument passed into it.
    return count;
}