// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//1. This is a function called highAndLow that takes in one parameter, numbers.
function highAndLow(numbers) {

    //2. The next line creates a variable called numArray and sets it equal to the numbers parameter split into an array of strings, then mapped to Numbers.
    let numArray = numbers.split(' ').map(Number);

    //3. The next line creates a variable called max and sets it equal to the maximum number in the numArray using the Math.max method.
    let max = Math.max(...numArray);

    //4. The next line creates a variable called min and sets it equal to the minimum number in the numArray using the Math.min method.
    let min = Math.min(...numArray);

    //5. The last line returns a string with the max and min variables concatenated together with a space between them.
    return `${max} ${min}`;
}