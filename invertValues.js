// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.


// The invert function takes an array as input. For example, the array could be [1, 2, 3].

// Then, the function uses something called the map method on the array. The map method takes each element of the array, and does something with it. In this case, the map method takes each element and changes its sign (from positive to negative, or from negative to positive).

// For example, if the array is [1, 2, 3], the map method will change the signs of the elements like this: [-1, -2, -3].

// Finally, the map method returns the new array with the inverted elements. In this case, the new array would be [-1, -2, -3].

// The invert function returns this new array.

function invert(array) {
    return array.map(item => -item);
}