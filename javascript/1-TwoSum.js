/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var _index1 = 0, _index2 = 1;

    for (var i = 0; i < nums.length; i++) {
        for (var j = i+1 ; j < nums.length; j++) {
            if (nums[i]+nums[j] == target) {
                _index1 = i;
                _index2 = j;
                return [_index1, _index2];
            }
        }
    }
};