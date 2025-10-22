var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;

    function hasKNodes(node, k) {
        let count = 0;
        while (node && count < k) {
            node = node.next;
            count++;
        }
        return count === k;
    }

    function reverseKNodes(head, k) {
        let prev = null;
        let curr = head;
        let next = null;
        while (k > 0 && curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            k--;
        }
        return [prev, curr];
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let prevGroupEnd = dummy;
    let curr = head;

    while (hasKNodes(curr, k)) {
        let groupStart = curr;
        let [newHead, nextGroupHead] = reverseKNodes(curr, k);
        prevGroupEnd.next = newHead;
        groupStart.next = nextGroupHead;
        prevGroupEnd = groupStart;
        curr = nextGroupHead;
    }

    return dummy.next;
};
