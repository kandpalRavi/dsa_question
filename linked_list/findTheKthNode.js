// // Input: head = [1,2,3,4,5], n = 2
// // Output: [1,2,3,5]



// var removeNthFromEnd = function(head, n) {
//     let fast = head;
//     let  slow = head;
//     for (let i = 0; i < n; i++) {
//         fast = fast.next;
//     }

//     if (!fast) return head.next
//     while (fast.next){ 
//         fast = fast.next ;
//         slow = slow.next ;
//     }
//     slow.next = slow.next.next;
//     return head;
// };


// let slow = head;
// let fast = head;

// for(let count =1 ;count<n;count++){
//     fast = fast.next;
// }
// if(fast==null) return head.next;

// while(fast.next!==null){
//     fast = fast.next;
//     slow = slow.next;
// }
// return slow;

class Node{
    constructor(val,next){
        this.val = (val===undefined?0:val);
        this.next = (next==undefined?null:next);
    }
}

let list1= new Node(1,new Node(2,new Node(4,new Node(6))));

let list2= new Node(1,new Node(3,new Node(4)));

// let list2 = new Node(0);
// let list1;

// input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
const mergeTwoSortedList = function (list1,list2){
    //write code here;
    let head =  new Node(null);
    let curr = head;
    while(list1 && list2){
        if(list1.val<list2.val){
            curr.next = list1;
            list1 = list1.next;
        }
        else{
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }
    if(list1){
        curr.next =list1;
    }
    if(list2){
        curr.next =list2;
    }

    return head.next;
     
    
};

// let x = mergeTwoSortedList(list1,list2);
 
// while(x){
//     console.log(x.val);
//     x =x.next;
// }


const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

 let list3= new ListNode(null);
 console.log(list3);

