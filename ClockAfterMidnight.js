// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

//This function takes in three parameters: h (hours), m (minutes), and s (seconds). It then calculates the total number of milliseconds since midnight and returns that value. 
function past(h, m, s) {
    // The first line of the function multiplies the hours by 3600000, which is the number of milliseconds in an hour. 
    // The second line multiplies the minutes by 60000, which is the number of milliseconds in a minute. 
    // The third line multiplies the seconds by 1000, which is the number of milliseconds in a second. 
    // Finally, all three values are added together and returned as the total number of milliseconds since midnight.
    return (h * 3600000) + (m * 60000) + (s * 1000);
}