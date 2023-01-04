// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//1. The function takes in one parameter, "walk", which is an array of directions.
function isValidWalk(walk) {
    //2. Two variables, x and y, are initialized to 0. These will be used to track the position of the walker. 
    let x = 0;
    let y = 0;

    //3. An if statement checks if the length of the array is not equal to 10 (the number of steps in a valid walk). If it isn't, the function returns false. 
    if (walk.length !== 10) {
        return false;
    }

    //4. A for loop iterates through each element in the array and adds or subtracts from x and y depending on which direction is given (north adds 1 to y, south subtracts 1 from y, east adds 1 to x, west subtracts 1 from x). 
    for (let i = 0; i < walk.length; i++) {
        if (walk[i] === 'n') {
            y++;
        } else if (walk[i] === 's') {
            y--;
        } else if (walk[i] === 'e') {
            x++;
        } else if (walk[i] === 'w') {
            x--;
        }
    }

    //5. Finally, the function returns true if both x and y are equal to 0 (indicating that the walker has returned to their starting point) or false otherwise.
    return x === 0 && y === 0;
}