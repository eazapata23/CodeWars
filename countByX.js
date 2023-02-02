// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
        z.push(x * i);
    }

    return z;
}

// The problem is to create a function countBy in JavaScript that takes two arguments: x and n. The function should return an array of the first n multiples of x. The returned array should contain n elements, where each element is equal to x multiplied by a positive integer from 1 to n.

// The solution involves defining the countBy function, which uses a for loop to iterate n times. In each iteration, the loop pushes the result of x multiplied by the current iteration count into an array called result. Finally, the result array is returned as the result of the countBy function.