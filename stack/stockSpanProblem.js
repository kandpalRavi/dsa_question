let arr1  = [100,80,60,70,60,75,85];
let arr2 = [3,5,0,9,8];
const stockSpan =(arr)=>{
    let st = [];
    let res = [];
    for(let i=0;i<arr.length;i++){
        while(st.length && arr[st[st.length-1]]<=arr[i]) st.pop();
        if(!st.length) res.push(i+1);
        else{
            res.push(i-st[st.length-1]);
        }
        st.push(i);
    }
    console.log(res);
}
stockSpan(arr1);
stockSpan(arr2);