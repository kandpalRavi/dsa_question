
class Node{
    constructor(val,next){
        this.val = (val===undefined?0:val);
        this.next = (next==undefined?null:next);
    }
}

let list= new Node(1,new Node(4,new Node(2,new Node(1))));


const isPalindrom =(head)=>{
    let stack = [];
    let curr = head;
    let index = 0
    while(curr){
        stack[index] = curr.val;
        curr = curr.next;
        index++;
    }
    
    curr = head;
    index = stack.length-1;
    while(index>=0){
        if(stack[index]!==curr.val) return false;
        index--;
        curr = curr.next;
    }
    return true;
}

let x = isPalindrom(list);
console.log(x);
