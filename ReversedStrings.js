// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//1. This line declares a function called reverseString that takes in one parameter, str. 
function reverseString(str) {

    //2. This line splits the string into an array of characters and stores it in a variable called str. 
    return str.split('')

        //3. This line reverses the order of the characters in the array and stores it in a variable called str. 
        .reverse()

        //4. This line joins all of the characters back together into a string and stores it in a variable called str. 
        .join('')

    //5. This line returns the reversed string from the function. 
    return str;
}