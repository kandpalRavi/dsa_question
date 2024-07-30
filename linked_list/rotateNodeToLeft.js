class Node{
    constructor(val,next){
        this.val = (val===undefined?0:val);
        this.next = (next==undefined?null:next);
    }
}

let list = new Node(1,new Node(2,new Node(3,new Node(4,new Node(5)))));

function rotateNodeToLeft(head,k){
    if(k==0) return head;
    let curr = head;
    let count=1;
    while(count<k && curr){
        curr =curr.next;
        count++;
    }
    if(!curr) return head;
    let kthNode = curr;
    while(curr.next){
        curr = curr.next;
    }
    curr.next = head;
    head = kthNode.next;
    kthNode.next = null;
    return head;
}

 list = rotateNodeToRight(list,4);

let str ='';
 while(list){
    str+=list.val+' ';
    list= list.next;
 }
console.log(str);