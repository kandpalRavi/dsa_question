const arr = [5,4,1,3,2];
// output  =-1,5,4,4,3;

let n  = arr.length;
// print the closest greater element, to thta particular element. if there is no greater element for that element 
// print -1,if two value with same distance take the left one.

/*
    Approch :-
    create a function that will itrate through left to right side of array and check for
    greater elem for left side and return array of indexes for that elme if no greater elem
    take -1.same goes for right side of array . 

    then compair both array ,
*/
const nearestGreaterElem = (arr,n)=>{
    let left  = leftArr(arr,n);
    console.log(left);
}

function leftArr (arr,n){
    let left = [];
    let st = [];
    for(let i=0;i<n;i++){
        while(st.length && arr[st[st.length-1]]<=arr[i]){
            st.pop();
        }
        if(!st.length) left[i] = -1;
        else{
            left[i] = st[st.length-1];
        }
        st.push(i);
    }
    return left;

}
function rightArr(arr,n){
    let right = [];
    let st = [];
    for(let i=n-1;i>=0;i--){
        
    }
}
nearestGreaterElem(arr,n);


