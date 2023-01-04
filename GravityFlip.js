// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

// +---+                                       +---+
// |   |                                       |   |
// +---+                                       +---+
// +---++---+     +---+              +---++---++---+
// |   ||   |     |   |   -->        |   ||   ||   |
// +---++---+     +---+              +---++---++---+
// +---++---++---++---+         +---++---++---++---+
// |   ||   ||   ||   |         |   ||   ||   ||   |
// +---++---++---++---+         +---++---++---++---+
// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

// Examples (input -> output:
// * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]
// PUZZLESARRAYS

//This code is a function that sorts an array of numbers in either ascending or descending order.
//This line declares a function called 'flip' that takes two parameters, 'd' and 'a'.
const flip = (d, a) => {
    //This line declares a variable called 'result' and assigns it an empty array.
    let result = [];
    //This line checks if the value of the parameter 'd' is equal to the string 'R'. 
    if (d === 'R') {
        //If the condition in line 3 is true, this line assigns the sorted array to the variable 'result', sorting it in ascending order using the sort() method and comparing each element with its neighbor using arrow function syntax. 
        result = a.sort((a, b) => a - b);
        //If the condition in line 3 is false, this line checks if the value of parameter 'd' is equal to the string 'L'. 
    } else if (d === 'L') {
        //If the condition in line 5 is true, this line assigns the sorted array to the variable 'result', sorting it in descending order using the sort() method and comparing each element with its neighbor using arrow function syntax. 
        result = a.sort((a, b) => b - a);
    }
    //This line returns the value of variable 'result'.
    return result;
}