/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    var res, hold;
    while (l1 || l2) {
        var val, temp;
        if (l1 && l2) {
            if (l1.val < l2.val) {
                val = l1.val;
                l1 = l1.next;
            } else {
                val = l2.val;
                l2 = l2.next
            }
        } else if (l1) {
            val = l1.val;
            l1 = l1.next;
        } else {
            val = l2.val;
            l2 = l2.next;
        }
        temp = new ListNode(val);
        // if empty
        if (!res) {
            res = temp;
            hold = res;
        } else {
            hold.next = temp;
            hold = temp;
        }
    }
    
    if (!res) {
        res = null;
    }
    return res;
};