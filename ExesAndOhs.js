// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//This is a function called XO that takes in a string as an argument.
function XO(str) {
    //It creates two variables, xCount and oCount, and sets them both to 0.
    let xCount = 0;
    let oCount = 0;

    //It then uses a for loop to iterate through the string. 
    //For each character in the string, it checks if it is an 'x' or an 'o'. 
    for (let i = 0; i < str.length; i++) {
        //If it is an 'x', it adds 1 to the xCount variable. 
        if (str[i].toLowerCase() === 'x') {
            xCount++;
            //If it is an 'o', it adds 1 to the oCount variable. 
        } else if (str[i].toLowerCase() === 'o') {
            oCount++;
        }
    }

    //Finally, it returns true if xCount is equal to oCount, and false otherwise.
    return xCount === oCount;
}