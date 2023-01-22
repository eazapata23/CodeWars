// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str) {
    //convert the string to lowercase
    str = str.toLowerCase();

    //create an object to store the frequency of each character
    let charFrequency = {};

    //iterate over each character in the string
    for (let i = 0; i < str.length; i++) {
        if (charFrequency[str[i]]) {
            return false;
        } else {
            charFrequency[str[i]] = 1;
        }
    }

    //if we have made it this far, the string is an isogram
    return true;
}

//another way with fewer code
function isIsogram(str) {
    return !str.toLowerCase().split('').some((c, i, a) => a.indexOf(c) !== i);
}

// Explanation:
// The ! in !str.toLowerCase() is the logical NOT operator in JavaScript. It negates the boolean value of the expression that follows it, so !true returns false and !false returns true.
// str.toLowerCase() converts the input string to lowercase, so that the function can ignore letter case.
// .split('') converts the string to an array of characters.
// .some((c,i,a) => a.indexOf(c) !== i) uses the some() array method to iterate over the characters and check if any of them have an index that is not equal to the current index (i) using the indexOf() method. In other words, it checks if any of the characters have already been seen before.
// ! in front of the function negates the result of the some() method so that it returns true if all characters are unique, and false if there are any duplicates.