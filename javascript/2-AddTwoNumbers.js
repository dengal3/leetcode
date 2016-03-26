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
var addTwoNumbers = function(l1, l2) {
    var res = null;
    var num, extra = 0;
    var hold = res;
    while (l1 || l2) {
        if (l1 && l2) {
            num = (l1.val + l2.val)+extra;
            
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1) {
            num = (l1.val) + extra;
            
            l1 = l1.next;
        } else {
            num = (l2.val) + extra;
            
            l2 = l2.next;
        }
        extra = 0;
        if (num >= 10) {
            num = num%10;
            extra = 1;
        }
        if (!res) {
            res = new ListNode(num);
            hold = res;
        } else {
            hold.next = new ListNode(num);
            hold = hold.next;
        }
    }
    if (extra) {
        num = extra;
        if (!res) {
            res = new ListNode(num);
            hold = res;
        } else {
            hold.next = new ListNode(num);
            hold = hold.next;
        }
    }
    
    return res;
};