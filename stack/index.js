
// Next Greater Element To Right

// input = [4,12,5,3,1,2,5,3,1,2,4,6];
// output = [12,-1,6,5,2,5,6,4,2,4,6,-1];

let arr =  [4,12,5,3,1,2,5,3,1,2,4,6];

// class Stack 
// {

//     constructor()
//     {
//         this.st = [];
//         this.index =0;
//         // this.top = this.st.length-1
//     }

//     myPush(elem){
//         this.st[this.index]= elem;
//         this.index++;
//     }

//     myPop(){
//         this.index--;
//     }

//     output(){
//         console.log(this.st);
//     }
// }

// let stack = new Stack();

// stack.myPush(8);
// stack.myPush(7);
// stack.myPush(6);
// stack.myPush(5);
// stack.myPop();
// // stack.myPush(4);
// // stack.myPush(3);
// // stack.myPush(2);
// // stack.myPush(1);
//  stack.output();

let output = [];
let st = [];
for(let i=arr.length-1;i>=0;i--){

    while( st.length && arr[i]>=st[st.length-1]){
        st.pop();
    }

    if(!st.length) output[i] =-1;
    else output[i]= st[st.length-1];

    st.push(arr[i]);
    // console.log(st);
}

console.log(output.join(" "));

