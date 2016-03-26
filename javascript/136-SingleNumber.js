/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var map = {};
    
    for(var i = 0 ; i < nums.length; i++) {
        var key = nums[i];
        if (!map[key]) {
            map[key] = true;
        } else {
            delete map[key];
        }
    }
    
    for (var obj in map) {
        return +obj
    }
    
};