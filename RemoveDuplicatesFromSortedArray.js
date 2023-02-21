// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// One way to solve this problem is to use two pointers. We can initialize a slow pointer and a fast pointer, where the slow pointer iterates through the array, and the fast pointer searches for the next unique number. Whenever the fast pointer finds a unique number, we increment the slow pointer, and replace the value at that position with the unique number. 

var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let slow = 0;
    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[slow] !== nums[fast]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1;
};

//New Solution