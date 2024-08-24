/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (head === null) return null;

    var mid = findMiddle(head);
    var node = new TreeNode(mid.val);

    if (head === mid) 
        return node;

    node.left = sortedListToBST(head);
    node.right = sortedListToBST(mid.next);
    return node;
};

function findMiddle(head) {
    var prev = null;
    var slow = head;
    var fast = head;

    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    if (prev !== null) {
        prev.next = null; 
    }

    return slow; 
}
