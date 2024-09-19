// write a progra that finds lower bound of k in logn time complexity. 
// Lower bound of a number k in a sorted list is the index of the first number which  is same as k ,
//  in case the number is not present ,print -1


let [n,k] = [5,3];
let arr = [1,1,2,2,5];

const checkLowerBound =(arr ,n,k)=>{
    let low = 0;
    let high = n-1;
    
    let orc = -1;
    while(low<=high){
        let mid = low + Math.floor((high -low)/2);


        if(arr[mid]==k) {
            orc = mid;
            high = mid - 1;
        }
        else if(arr[mid]>k) high = mid -1;
        else low = mid +1;
    }
    return orc;
}


// const checkLowerBound = (arr, n, k) => {
//     let low = 0;
//     let high = n - 1;
//     let orc = -1;

//     while (low <= high) {
//         let mid = low + Math.floor((high - low) / 2);
        
//         if (arr[mid] === k) {
//             orc = mid;  // Possible lower bound found
//             high = mid - 1;  // Move to the left to find the first occurrence
//         } 
//         else if (arr[mid] > k) {
//             high = mid - 1;
//         } 
//         else {
//             low = mid + 1;
//         }
//     }

//     return orc;
// }









let x = checkLowerBound(arr,n,k)
console.log(x);