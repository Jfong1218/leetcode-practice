
//  * Definition for singly-linked list.
function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    let result = new ListNode(0)
    let pointer = result
    while (list1, list2) {
        if (list1.val >list2.val){
            pointer.next=list2.val
            list2=list2.next
        }
        else {
            pointer.next=list1.var
            list1=list1.next
        }
        pointer=pointer.next
        
    }
    if (list1 === null) {
        pointer.next = list2
    }
    if (list2 === null) {
        pointer.next = list1
    }

};

list1 = [1,2,4]
list2 = [1,3,4]
console.log(mergeTwoLists(list1,list2))