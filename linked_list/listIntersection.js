
class Node {
    constructor(val,next){
        this.val = (val==undefined?0:val);
        this.next = (next==undefined?null:next);
    }
}

let list1 = new Node(8,new Node(4,new Node(5)));

let list2 = new Node(4,new Node(1,list1));

let list3  = new Node(5,new Node(6,new Node(1,list1)));


const listIntersection =(head1,head2)=>{
    l1 = length(head1);
    l2 = length(head2);
    if(l1==0 ||l2==0) return null;
    let diff ;
    if(l1>l2){

        diff = l1-l2;
        

        return check(diff,head1,head2);
    }
    else{
        diff = l2-l1;
        
        return check(diff,head2,head1);
    }
}

const check = (diff,head1,head2) =>{
    //head1 leangth is greter then head 2
    let curr1 = head1;
    
    let curr2 = head2;

    for(let i=1;i<=diff;i++){
        if(!curr1) return null;
        curr1 = curr1.next;
    }

    while(curr1 && curr2){
        if(curr1==curr2) return curr1.val;
        curr1 = curr1.next;
        curr2 = curr2.next;
    }
    return null
}


const length  = (head)=>{
    if( !head||!head.next) return 0;

    let curr = head;
    let len = 0;
    while(curr){
        len +=1;
        curr = curr.next;
    }

    return len;
}


let res = listIntersection(list2,list3);
console.log(res);
