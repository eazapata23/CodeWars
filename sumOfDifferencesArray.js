// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// This code is a function called sumDifferences. It takes in an array (arr) as an input. 

// First, it checks to see if the array has one or fewer items in it. If it does, it returns 0. 

// Then, it sorts the array from biggest to smallest (b - a). 

// Next, it creates a variable called result and sets it to 0. 

// Then, it starts a loop that will go through each item in the sorted array. For each item, it adds the difference between that item and the next item to the result variable. 

// Finally, when the loop is done, it returns the result variable.

function sumOfDifferences(arr) {
    if (arr.length <= 1) return 0;
    let sorted = arr.sort((a, b) => b - a);
    let result = 0;
    for (let i = 0; i < sorted.length - 1; i++) {
        result += sorted[i] - sorted[i + 1];
    }
    return result;
}