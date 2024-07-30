class Node{
    constructor(val,next){
        this.val =(val===undefined?0:val);
        this.next =(next==undefined?null:next);
    }
}
// [0,1,2]
let list = new Node(1,new Node(2,new Node(3,new Node(4,new Node(5)))));
let list2 = new Node(0,new Node(1,new Node(2)));
function ToLeft(head,k){
    if(k==0) return head;
    let curr = head;
    let length =nodeLength(head)-k;
    let count = 1;
    while(count<length &&curr){
        curr = curr.next;
        count++;
    }
    if(!curr) return head;
    let kthNode = curr;
    while(curr.next ){
        curr = curr.next;
    }
    curr.next = head;
    head = kthNode.next;
    kthNode.next = null;
    return head;
}
let x = ToLeft(list2,4);
console.log(printNode(x));

function printNode(list){
    
    let str ='';
    while(list){
        str+=list.val+' ';
        list= list.next;
    }
     return str;
}

function nodeLength(head){
    let curr =head;
    let count =0;
    while(curr){
        curr =curr.next;
        count++;
    }
    return count;
}