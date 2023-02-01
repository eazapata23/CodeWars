// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-35)

// Note: The function accepts an integer and returns an integer.


// The first line creates a variable called result and sets its value to an empty string "".

// The next line turns the input n into a string by using the toString method and splits it into an array of individual characters using the split method with an argument of "".

// Then, we use the forEach method to loop over each element in the array, which is a single digit of the input n.

// In the function passed to forEach, we take the current digit and square it by multiplying it by itself. Then, we add the result of this operation to the result variable as a string using the += operator.

// Finally, we return the value of result after converting it back to an integer using the parseInt function.


function squareDigits(num) {
    let result = "";
    num.toString().split("").forEach(digit => {
        result += digit * digit;
    })
    return parseInt(result);
}