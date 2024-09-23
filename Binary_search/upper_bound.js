// write a program that finds upper bound of k in logn time complexity. 
// upper bond of a number k in a sorted list is the index of the first number which  is >k ,
//  in case the number is not present ,print -1

let [n,k] = [10,4];
let arr = [0,2,4,4,5,5,7,7,9,10];


const checkUpperBound =(arr,n,k)=>{
    let low =0;
    let high = n-1;

    let orc = -1;
    while(low<=high){
        let mid = low +Math.floor((high-low)/2);
        if(arr[mid]>k){
            orc = mid;
            high = mid-1;
        } 
        else{
            low = mid+1;
        }
    }
    return orc;
}

let result =checkUpperBound(arr,n,k);
console.log(result);